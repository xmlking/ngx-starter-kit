import { ApiProperty } from '@nestjs/swagger';
import { User as IUser } from '@ngx-starter-kit/models';
import { IsAscii, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  RelationId,
  UpdateDateColumn,
  VersionColumn
} from 'typeorm';
import { Base } from '../core/entities/base';
import { Image } from './profile/image.entity';
import { Profile } from './profile/profile.entity';

@Entity('user')
export class User extends Base implements IUser {
  @IsString()
  @IsNotEmpty()
  @Index()
  @Column()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Index()
  @Column()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(10, 100)
  @Index()
  @Column()
  email: string;

  @IsAscii()
  @IsNotEmpty()
  @Length(8, 20)
  @Index({ unique: true })
  @Column()
  username: string;

  @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  @VersionColumn()
  version?: number;

  @OneToMany(
    _ => Image,
    image => image.user
  )
  images?: Image[];

  // FIXME: OneToOne downward cascade delete not implemented
  @OneToOne(type => Profile, { cascade: ['insert', 'remove'], nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  profile?: Profile;

  @RelationId((user: User) => user.profile)
  readonly profileId?: string;
}
