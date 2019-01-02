import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AuditBase } from '../../core/entities/audit-base.entity';
import { Image } from './image.entity';

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
