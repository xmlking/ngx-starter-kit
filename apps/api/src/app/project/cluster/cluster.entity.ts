import { Cluster as ICluster } from '@ngx-starter-kit/models';
import { Exclude } from 'class-transformer';
import { IsAscii, IsNotEmpty, IsUrl, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, Index, OneToMany, RelationId } from 'typeorm';
import { AuditBase } from '../../core/entities/audit-base';
import { Project } from '../project.entity';

@Entity('cluster')
export class Cluster extends AuditBase implements ICluster {
  @IsNotEmpty()
  @IsAscii()
  @MinLength(3)
  @MaxLength(20)
  @Index({ unique: true })
  @Column({ length: 15 })
  name: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(6)
  @Column({ length: 6 })
  ver: string;

  @IsNotEmpty()
  @IsUrl()
  @MinLength(10)
  @MaxLength(256)
  @Column()
  baseUrl: string;

  @Exclude()
  @IsNotEmpty()
  @MaxLength(256)
  @Column()
  token: string;

  @OneToMany(
    _ => Project,
    project => project.cluster,
  )
  projects?: Project[];

  @RelationId((cluster: Cluster) => cluster.createdBy)
  readonly createdById?: string;

  @RelationId((cluster: Cluster) => cluster.updatedBy)
  readonly updatedById?: string;
}
