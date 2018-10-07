import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AuditBase } from '../../core';
import { Image } from './Image.entity';

@Entity('profile')
export class Profile extends AuditBase {
  @OneToOne(type => Image)
  @JoinColumn()
  profileImage: Image;

  @Column()
  sex: Sex;
}

export enum Sex {
  MALE,
  FEMALE,
  UNKNOW,
}
