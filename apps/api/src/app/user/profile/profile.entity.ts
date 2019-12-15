import { ApiProperty } from '@nestjs/swagger';
import { Gender, Profile as IProfile } from '@ngx-starter-kit/models';
import { Exclude } from 'class-transformer';
import { Length } from 'class-validator';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn, VersionColumn } from 'typeorm';
import { Base } from '../../core/entities/base';
import { Image } from './image.entity';

@Entity('profile')
export class Profile extends Base implements IProfile {
  @OneToOne(_ => Image, { cascade: ['insert', 'update'], eager: true, nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  avatar?: Image;

  @Column({ type: 'enum', enum: Gender, default: Gender.UNKNOW })
  gender?: Gender = Gender.UNKNOW;

  @Column({ nullable: true })
  @Length(10, 20)
  mobilePhone?: string;

  @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  @Exclude()
  @VersionColumn()
  version?: number;
}
