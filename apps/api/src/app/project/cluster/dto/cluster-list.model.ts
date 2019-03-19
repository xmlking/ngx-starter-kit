import { IPagination } from '../../../core';
import { Cluster } from '../cluster.entity';
import { ApiModelProperty } from '@nestjs/swagger';

export class ClusterList implements IPagination<Cluster> {
  @ApiModelProperty({ type: Cluster, isArray: true })
  readonly items: Cluster[];
  @ApiModelProperty({ type: Number, readOnly: true })
  readonly total: number;
}
