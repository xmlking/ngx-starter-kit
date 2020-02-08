import { Project as IProject } from '@ngx-starter-kit/models';
import { Column, Entity, Index, ManyToOne, RelationId } from 'typeorm';
import { Unique } from 'typeorm/decorator/Unique';
import { AuditBase } from '../core/entities/audit-base';
import { Cluster } from './cluster/cluster.entity';
import { Labels } from './dto/labels.dto';
import { Membership } from './dto/membership';
import { ResourceQuota } from './dto/resource-quota';

@Entity()
@Unique('UQ_namespace_cluster_for_project', ['namespace', 'cluster'])
export class Project extends AuditBase implements IProject {
  @Index()
  @Column()
  name: string;

  @Column()
  description: string;

  @Index()
  @Column()
  namespace: string;

  @Column()
  serviceAccountName: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Index()
  @Column()
  billingId: string;

  @Column({ default: true })
  isActive?: boolean;

  @ManyToOne(
    type => Cluster,
    cluster => cluster.projects,
    { onDelete: 'CASCADE', nullable: false },
  )
  cluster: Cluster;

  @Column('jsonb')
  labels: Labels;

  @Column('text', { nullable: true, array: true })
  tags?: Set<string>;

  @Column('jsonb', { nullable: true })
  memberships?: Set<Membership>;

  @Column('jsonb')
  resourceQuota: ResourceQuota;

  @RelationId((project: Project) => project.cluster)
  readonly clusterId?: string;

  @RelationId((project: Project) => project.createdBy)
  readonly createdById?: string;

  @RelationId((project: Project) => project.updatedBy)
  readonly updatedById?: string;
}
