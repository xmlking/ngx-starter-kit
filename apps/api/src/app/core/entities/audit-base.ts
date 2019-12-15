import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { User } from '../../user';
import { RequestContext } from '../context';

// TODO: Implement Soft Delete

export abstract class AuditBase {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  @ManyToOne(type => User, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  createdBy?: User;

  @ManyToOne(type => User, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  updatedBy?: User;

  @Exclude()
  @VersionColumn()
  version?: number;

  @BeforeInsert()
  setCreatedByUser() {
    const currentUser = RequestContext.currentUser();
    if (currentUser) {
      this.createdBy = currentUser;
    }
  }

  /**
   * NOTE: @BeforeUpdate won't run if you just call update(id, partialEntity)
   * https://github.com/typeorm/typeorm/blob/master/docs/listeners-and-subscribers.md#beforeupdate
   */
  @BeforeUpdate()
  setUpdatedByUser() {
    const currentUser = RequestContext.currentUser();
    if (currentUser) {
      this.updatedBy = currentUser;
    }
  }
}
