import { Column, CreateDateColumn, Entity, Index, UpdateDateColumn, VersionColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Base } from '../../core/entities/base.entity';

@Entity('subscription')
export class Subscription extends Base {
  @ApiModelProperty({ type: String })
  @Index({ unique: true })
  @Column()
  endpoint: string;

  @ApiModelProperty({ type: String })
  @Column()
  auth: string;

  @ApiModelProperty({ type: String })
  @Column()
  p256dh: string;

  @ApiModelProperty({ type: String, minLength: 3, maxLength: 20 })
  @Index()
  @Column()
  userId: string;

  @ApiModelProperty({ type: String, isArray: true })
  @Column('text', { nullable: true, array: true })
  topics: string[];

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn()
  createdAt?: Date;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn()
  updatedAt?: Date;

  @Exclude()
  @VersionColumn()
  version?: number;
}
