import { ResourceQuota } from './resource-quota.model';
import { Cluster } from './cluster.model';
import { Labels } from './labels.model';
import { Membership } from './membership.model';

export interface Project {
  id?: number | string;
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
  readonly clusterId?: number;
  readonly createdById?:  number | string;
  readonly updatedById?:  number | string;
}
