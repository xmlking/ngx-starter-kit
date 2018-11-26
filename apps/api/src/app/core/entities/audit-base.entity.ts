import { UpdateDateColumn, CreateDateColumn, ManyToOne, VersionColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Transform } from 'class-transformer';
import toHexString from './toHexString';
import { ApiModelProperty } from '@nestjs/swagger';
// FIXME: we need to import User like this to avoid Circular denpendence problem
import { User } from '../../auth/user.entity';

// TODO: Implement Soft Delete

export abstract class AuditBase {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: 'string', format: 'date-time',  example: '2018-11-21T06:20:32.232Z'})
  // @Exclude()
  @CreateDateColumn()
  createdAt?: Date;

  @ApiModelProperty({ type: 'string', format: 'date-time',  example: '2018-11-21T06:20:32.232Z'})
  // @Exclude()
  @UpdateDateColumn()
  updatedAt?: Date;

  // @Exclude()
  @ManyToOne(type => User, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  createdBy: User;

  // @Exclude()
  @ManyToOne(type => User, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  updatedBy: User;

  @Exclude()
  @VersionColumn()
  version?: number;
}
