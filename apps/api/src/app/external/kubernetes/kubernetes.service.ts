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
import * as Api from 'kubernetes-client';
import { ConfigService } from '../../config';
import { environment as env } from '@env-api/environment';

const Client = Api.Client1_10;
const config = Api.config;

@Injectable()
export class KubernetesService implements OnModuleInit {
  private readonly logger = new Logger(KubernetesService.name);

  private readonly clients = new Map(
    Object.entries(env.kubernetes).map<[string, Api.Api]>(([key, value]) => [
      key,
      new Client({
        config: {
          url: value.baseUrl,
          auth: {
            bearer: value.token,
          },
          insecureSkipTlsVerify: true,
          version: 'v1',
          promises: true,
        },
        version: value.version || '1.10',
      }),
    ]),
  );

  constructor(private readonly appConfig: ConfigService) {}

  async onModuleInit() {
    // @ts-ignore
    // for (const [key, client] of this.clients.entries()) {
    //   try {
    //     await client.loadSpec();
    //   } catch (err) {
    //     console.error(`Unable to connect to ${key}`, err);
    //   }
    // }
  }

  public async listNamespaces(cluster: string) {
    try {
      const namespaces = await this.clients.get(cluster).api.v1.namespaces.get();
      return namespaces.body.items;
    } catch (error) {
      KubernetesService.handleError(error);
    }
  }

  public async myNamespaces(cluster: string, token: string) {
    try {
      // this.client.get(cluster).setToken(token)
      const namespaces = await this.clients.get(cluster).api.v1.namespaces.get();
      return namespaces.items;
    } catch (error) {
      KubernetesService.handleError(error);
    }
  }

  public async getNamespace(cluster: string, namespace: string) {
    try {
      const namespace1 = await this.clients
        .get(cluster)
        .api.v1.namespaces(namespace)
        .get();
      return namespace1.body;
    } catch (error) {
      KubernetesService.handleError(error);
    }
  }

  public async myServiceAccounts(cluster: string, namespace: string) {
    try {
      const namespaces = await this.clients
        .get(cluster)
        .api.v1.namespaces(namespace)
        .serviceaccounts.get();
      return namespaces.body.items;
    } catch (error) {
      KubernetesService.handleError(error);
    }
  }

  public async hasNamespace(cluster: string, namespace: string) {
    try {
      const foundNamespace = await this.clients
        .get(cluster)
        .api.v1.namespaces(namespace)
        .get();
      return !!foundNamespace;
    } catch (error) {
      if (error.code === 404) return false;
      KubernetesService.handleError(error);
    }
  }

  static handleError(error: Error & { code?: number; statusCode?: number }) {
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
