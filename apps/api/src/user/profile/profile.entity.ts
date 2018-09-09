import { Column, Entity } from 'typeorm';
import { AuditBase } from '../../core';
import { Image } from './Image.entity';

@Entity()
export class Profile extends AuditBase {
  @Column()
  profileImage: Image;

  @Column()
  sex: Sex;
}

export enum Sex {
  MALE,
  FEMALE,
  UNKNOW,
}
