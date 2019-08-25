import { ResourceQuota } from './resource-quota.model';
import { Cluster } from './cluster.model';
import { Labels } from './labels.model';
import { Membership } from './membership.model';

export interface Project {
  id?: string;
  name: string;
  description: string;
  namespace: string;
  serviceAccountName: string;
  email: string;
  username: string;
  billingId: string;
  isActive?: boolean;
  cluster?: Cluster;
  labels: Labels;
  tags?: Set<string>;
  memberships?: Set<Membership>;
  resourceQuota: ResourceQuota;
  createdAt?: Date;
  updatedAt?: Date;
  readonly clusterId?: string;
  readonly createdById?: string;
  readonly updatedById?: string;
}
