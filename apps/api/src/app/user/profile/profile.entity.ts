import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn, VersionColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Image } from './image.entity';
import { Base } from '../../core/entities/base';
import { Profile as IProfile, Gender } from '@ngx-starter-kit/models';

@Entity('profile')
export class Profile extends Base implements IProfile {
  @ApiModelProperty({ type: Image })
  @OneToOne(_ => Image, { cascade: ['insert', 'update'], eager: true, nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  avatar?: Image;

  @ApiModelProperty({ type: String, enum: Gender, default: Gender.UNKNOW })
  @Column({ type: 'enum', enum: Gender, default: Gender.UNKNOW })
  gender?: Gender;

  @ApiModelProperty({ type: String, minLength: 10, maxLength: 20 })
  @Column({ nullable: true })
  mobilePhone?: string;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  @Exclude()
  @VersionColumn()
  version?: number;
}
