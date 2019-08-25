import { Column, Entity, Index, OneToMany, RelationId } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsAscii, IsNotEmpty, IsUrl } from 'class-validator';
import { AuditBase } from '../../core/entities/audit-base';
import { Project } from '../project.entity';
import { Cluster as ICluster } from '@ngx-starter-kit/models';

@Entity('cluster')
export class Cluster extends AuditBase implements ICluster {
  @ApiModelProperty({ type: String, minLength: 3, maxLength: 15 })
  @IsNotEmpty()
  @IsAscii()
  @Index({ unique: true })
  @Column({ length: 15 })
  name: string;

  @ApiModelProperty({ type: String, minLength: 3, maxLength: 6 })
  @IsNotEmpty()
  @Column({ length: 6 })
  ver: string;

  @ApiModelProperty({ type: String, minLength: 10, maxLength: 256 })
  @IsNotEmpty()
  @IsUrl()
  @Column()
  baseUrl: string;

  @ApiModelProperty({ type: String, minLength: 256 })
  @Exclude()
  @IsNotEmpty()
  @Column()
  token: string;

  @ApiModelProperty({ type: Project, isArray: true })
  @OneToMany(_ => Project, project => project.cluster)
  projects?: Project[];

  @ApiModelProperty({ type: String, readOnly: true })
  @RelationId((cluster: Cluster) => cluster.createdBy)
  readonly createdById?: string;

  @ApiModelProperty({ type: String, readOnly: true })
  @RelationId((cluster: Cluster) => cluster.updatedBy)
  readonly updatedById?: string;
}
