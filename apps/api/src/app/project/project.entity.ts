import { Column, Entity, Index, ManyToOne, RelationId } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Labels } from './dto/labels.dto';
import { Membership } from './dto/membership';
import { ResourceQuota } from './dto/resource-quota';
import { AuditBase } from '../core/entities/audit-base.entity';
import { Cluster } from './cluster/cluster.entity';
import { Project as IProject } from '@ngx-starter-kit/models';

@Entity()
export class Project extends AuditBase implements IProject {
  @ApiModelProperty()
  @Index()
  @Column()
  name: string;

  @ApiModelProperty()
  @Column()
  description: string;

  @ApiModelProperty()
  @Column()
  namespace: string;

  @ApiModelProperty()
  @Column()
  serviceAccountName: string;

  @ApiModelProperty()
  @Column()
  email: string;

  @ApiModelProperty()
  @Column()
  username: string;

  @ApiModelProperty()
  @Index()
  @Column()
  billingId: string;

  @ApiModelProperty({ type: Boolean })
  @Column({ default: true })
  isActive?: boolean;

  @ApiModelProperty({ type: Cluster })
  @ManyToOne(type => Cluster, cluster => cluster.projects, { onDelete: 'CASCADE', nullable: false })
  cluster: Cluster;

  @ApiModelProperty({ type: Labels })
  @Column('jsonb')
  labels: Labels;

  @ApiModelProperty({ type: String, isArray: true })
  @Column('text', { nullable: true, array: true })
  tags?: Set<string>;

  @ApiModelProperty({ type: Membership, isArray: true })
  @Column('jsonb', { nullable: true })
  memberships?: Set<Membership>;

  @ApiModelProperty({ type: ResourceQuota })
  @Column('jsonb')
  resourceQuota: ResourceQuota;

  @ApiModelProperty({ type: Number, readOnly: true })
  @RelationId((project: Project) => project.cluster)
  readonly clusterId?: number;

  @ApiModelProperty({ type: Number, readOnly: true })
  @RelationId((project: Project) => project.createdBy)
  readonly createdById?: number;

  @ApiModelProperty({ type: Number, readOnly: true })
  @RelationId((project: Project) => project.updatedBy)
  readonly updatedById?: number;
}
