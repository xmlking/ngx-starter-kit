import { Column, Entity, Index } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsAscii, IsNotEmpty, IsUrl } from 'class-validator';
import { AuditBase } from '../../core/entities/audit-base.entity';

@Entity('cluster')
export class Cluster extends AuditBase {

  @ApiModelProperty({ type: String, minLength: 3, maxLength: 15 })
  @IsNotEmpty()
  @IsAscii()
  @Index()
  @Column({length: 15 })
  name: string;

  @ApiModelProperty({ type: String, minLength: 3, maxLength: 6 })
  @IsNotEmpty()
  @Column({length: 6 })
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
}
