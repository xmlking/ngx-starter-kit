import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '../../config';
import { ClusterService } from '../cluster/cluster.service';
import { KubeContext } from '../interfaces/kube-context';

import * as Api from 'kubernetes-client';
const Request = require('kubernetes-client/backends/request');

const Client = Api.Client1_13;
const config = Request.config;

@Injectable()
export class KubernetesService implements OnModuleInit {
  private readonly logger = new Logger(KubernetesService.name);
  private clusters: Map<string, Api.ApiRoot>;

  constructor(private readonly appConfig: ConfigService, private readonly clusterService: ClusterService) {}

  async onModuleInit() {
    await this.refreshClusters();
    // @ts-ignore
    // for (const [key, client] of this.clusters.entries()) {
    //   try {
    //     await client.loadSpec();
    //   } catch (err) {
    //     console.error(`Unable to connect to ${key}`, err);
    //   }
    // }
  }

  /**
   * for admin
   */

  async refreshClusters() {
    this.logger.log('Refreshing Kubernetes Clusters...');
    const { total: size, items: clusters } = await this.clusterService.findAll();
    this.logger.log(`Refreshed ${size} Kubernetes Clusters`);
    this.clusters = new Map(
      clusters.map<[string, Api.ApiRoot]>(cluster => [
        cluster.name,
        new Client({
          backend: new Request({
            url: cluster.baseUrl,
            auth: {
              bearer: cluster.token,
            },
            insecureSkipTlsVerify: true,
            version: 'v1',
            promises: true,
          }),
          version: cluster.version || '1.13',
        }),
      ]),
    );
  }

  async listNamespaces(cluster: string) {
    try {
      const namespaces = await this.clusters.get(cluster).api.v1.namespaces.get();
      return namespaces.body.items;
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * for any
   */

  async hasNamespace({ cluster, namespace }: KubeContext) {
    try {
      const foundNamespace = await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .get();
      return !!foundNamespace;
    } catch (error) {
      if (error.code === 404) {
        return false;
      }
      this.handleError(error);
    }
  }

  async getNamespace({ cluster, namespace }: KubeContext) {
    try {
      const response = await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .get();
      return response.body;
    } catch (error) {
      this.handleError(error);
    }
  }

  async createNamespace({ cluster, namespace, labels: { name = namespace } }: KubeContext) {
    const request = {
      body: {
        apiVersion: 'v1',
        kind: 'Namespace',
        metadata: {
          name,
          labels: {
            namespace,
          },
        },
      },
    };

    try {
      return await this.clusters.get(cluster).api.v1.namespaces.post(request);
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteNamespace({ cluster, namespace }: KubeContext) {
    try {
      return await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .delete();
    } catch (error) {
      this.handleError(error);
    }
  }

  async createServiceAccount({ cluster, namespace }: KubeContext, serviceAccountName: string) {
    const request = {
      body: {
        apiVersion: 'v1',
        kind: 'ServiceAccount',
        metadata: {
          name: serviceAccountName,
        },
      },
    };

    try {
      return await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .serviceaccounts.post(request);
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteServiceAccount({ cluster, namespace }: KubeContext, serviceAccountName: string) {
    try {
      return await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .serviceaccounts(serviceAccountName)
        .delete();
    } catch (error) {
      this.handleError(error);
    }
  }

  async createNetworkPolicy({ cluster, namespace }: KubeContext) {
    const request = {
      body: {
        apiVersion: 'networking.k8s.io/v1',
        kind: 'NetworkPolicy',
        metadata: { name: 'default-deny' },
        spec: {
          policyTypes: ['Egress', 'Ingress'],
          ingress: [
            {
              from: [
                {
                  namespaceSelector: {
                    matchLabels: {
                      namespace,
                    },
                  },
                },
              ],
            },
          ],
          egress: [
            {
              to: [
                {
                  namespaceSelector: {
                    matchLabels: {
                      namespace,
                    },
                  },
                },
              ],
            },
            {
              ports: [
                {
                  port: 53,
                  protocol: 'TCP',
                },
                {
                  port: 53,
                  protocol: 'UDP',
                },
              ],
            },
          ],
        },
      },
    };

    try {
      return await this.clusters
        .get(cluster)
        .apis['networking.k8s.io'].v1.namespaces(namespace)
        .networkpolicies.post(request);
    } catch (error) {
      this.handleError(error);
    }
  }

  async createClusterRoleBindingForServiceAccount(
    { cluster, namespace, labels: { name = namespace } }: KubeContext,
    serviceAccountName: string,
    role: string,
  ) {
    const request = {
      body: {
        apiVersion: 'rbac.authorization.k8s.io/v1',
        kind: 'RoleBinding',
        metadata: {
          name: `rb-${name}-${serviceAccountName}-${role}-sa`,
          labels: {
            created: 'kubeadmin',
          },
        },
        roleRef: {
          kind: 'ClusterRole',
          name: role,
          apiGroup: 'rbac.authorization.k8s.io',
        },
        subjects: [
          {
            kind: 'ServiceAccount',
            name: serviceAccountName,
            namespace,
          },
        ],
      },
    };

    try {
      return await this.clusters
        .get(cluster)
        .apis['rbac.authorization.k8s.io'].v1.namespaces(namespace)
        .rolebindings.post(request);
    } catch (error) {
      this.handleError(error);
    }
  }

  async createClusterRoleBindingForDashboardUsers(
    { cluster, namespace, labels: { name = namespace } }: KubeContext,
    username: string,
  ) {
    const request = {
      body: {
        apiVersion: 'rbac.authorization.k8s.io/v1',
        kind: 'RoleBinding',
        metadata: {
          name: `rb-${name}-${username}`,
          labels: {
            created: 'kubeadmin',
          },
        },
        roleRef: {
          kind: 'ClusterRole',
          name: 'admin',
          apiGroup: 'rbac.authorization.k8s.io',
        },
        subjects: [
          {
            kind: 'User',
            name: username,
            apiGroup: 'rbac.authorization.k8s.io',
            namespace,
          },
        ],
      },
    };

    try {
      return await this.clusters
        .get(cluster)
        .apis['rbac.authorization.k8s.io'].v1.namespaces(namespace)
        .rolebindings.post(request);
    } catch (error) {
      this.handleError(error);
    }
  }

  async createResourceQuotaForNamespace({ cluster, namespace, labels: { name = namespace } }: KubeContext) {
    const request = {
      body: {
        apiVersion: 'v1',
        kind: 'ResourceQuota',
        metadata: {
          name: `rq-${name.toLowerCase()}`,
        },
        spec: {
          hard: {
            cpu: '156',
            memory: '720Gi',
            'requests.cpu': '156',
            'requests.memory': '720Gi',
            'limits.cpu': '156',
            'limits.memory': '720Gi',
          },
        },
      },
    };

    try {
      return await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .resourcequotas.post(request);
    } catch (error) {
      this.handleError(error);
    }
  }

  async createResourceLimitRangeForNamespace({ cluster, namespace, labels: { name = namespace } }: KubeContext) {
    const request = {
      body: {
        apiVersion: 'v1',
        kind: 'LimitRange',
        metadata: {
          name: `rq-${name.toLowerCase()}`,
        },
        spec: {
          limits: [
            {
              max: {
                cpu: '32',
                memory: '128Gi',
              },
              min: {
                cpu: '300m',
                memory: '6Mi',
              },
              type: 'Pod',
            },
            {
              default: {
                cpu: '500m',
                memory: '500Mi',
              },
              defaultRequest: {
                cpu: '300m',
                memory: '300Mi',
              },
              type: 'Container',
            },
          ],
        },
      },
    };

    try {
      return await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .limitranges.post(request);
    } catch (error) {
      this.handleError(error);
    }
  }

  async listDeployments({ cluster, namespace }: KubeContext) {
    try {
      const deployments = await this.clusters
        .get(cluster)
        .apis.apps.v1.namespaces(namespace)
        .deployments.get();
      return deployments.body.items;
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * for me
   */

  async myNamespaces(context: KubeContext) {
    const { cluster, namespace } = context;
    try {
      // this.clusters.get(cluster).setToken(token)
      const namespaces = await this.clusters.get(cluster).api.v1.namespaces.get();
      return namespaces.items;
    } catch (error) {
      this.handleError(error);
    }
  }

  async myServiceAccounts(context: KubeContext) {
    const { cluster, namespace } = context;
    try {
      const namespaces = await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .serviceaccounts.get();
      return namespaces.body.items;
    } catch (error) {
      this.handleError(error);
    }
  }

  async scrape(context: KubeContext) {
    const { cluster, namespace } = context;
    const data: any = {};
    try {
      const services = await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .services.get();
      const endpoints = await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .endpoints.get();
      const ingresses = await this.clusters
        .get(cluster)
        .apis.extensions.v1beta1.namespaces(namespace)
        .ingresses.get();
      const pods = await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .pods.get();
      const deployments = await this.clusters
        .get(cluster)
        .apis.apps.v1.namespaces(namespace)
        .deployments.get();
      const replicasets = await this.clusters
        .get(cluster)
        .apis.apps.v1.namespaces(namespace)
        .replicasets.get();
      const daemonsets = await this.clusters
        .get(cluster)
        .apis.apps.v1.namespaces(namespace)
        .daemonsets.get();
      const statefulsets = await this.clusters
        .get(cluster)
        .apis.apps.v1.namespaces(namespace)
        .statefulsets.get();
      const persistentvolumeclaims = await this.clusters
        .get(cluster)
        .api.v1.namespaces(namespace)
        .persistentvolumeclaims.get();
      const persistentvolumes = await this.clusters.get(cluster).api.v1.persistentvolumes.get();

      // Build response data and send
      data.services = services.body.items;
      data.endpoints = endpoints.body.items;
      data.ingresses = ingresses.body.items;
      data.pods = pods.body.items;
      data.deployments = deployments.body.items;
      data.replicasets = replicasets.body.items;
      data.daemonsets = daemonsets.body.items;
      data.statefulsets = statefulsets.body.items;
      data.persistentvolumeclaims = persistentvolumeclaims.body.items;
      data.persistentvolumes = persistentvolumes.body.items;
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  private handleError(error: Error & { code?: number; statusCode?: number }) {
    const message = error.message || 'unknown error';
    const statusCode = error.statusCode || error.code || HttpStatus.I_AM_A_TEAPOT;
    console.log(message, statusCode);
    switch (statusCode) {
      case HttpStatus.CONFLICT:
        throw new ConflictException(error.message);
      case HttpStatus.UNAUTHORIZED:
        throw new UnauthorizedException(error.message);
      case HttpStatus.NOT_FOUND:
        throw new NotFoundException(error.message);
      case HttpStatus.BAD_REQUEST:
        throw new BadRequestException(error.message);
      default:
        throw new HttpException(message, statusCode);
    }
  }
}
