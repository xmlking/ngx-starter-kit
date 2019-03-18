import { IPagination } from '../../../core';
import { Cluster } from '../cluster.entity';

export class ClusterList implements IPagination<Cluster> {
  readonly items: Cluster[];
  readonly total: number;
}
