import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  RelationId,
  UpdateDateColumn,
  VersionColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsAscii, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Base } from '../core/entities/base';
import { User as IUser } from '@ngx-starter-kit/models';
import { Image } from './profile/image.entity';
import { Profile } from './profile/profile.entity';

@Entity('user')
export class User extends Base implements IUser {
  @ApiModelProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  @Index()
  @Column()
  firstName: string;

  @ApiModelProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  @Index()
  @Column()
  lastName: string;

  @ApiModelProperty({ type: String, minLength: 10, maxLength: 100 })
  @IsEmail()
  @IsNotEmpty()
  @Index()
  @Column()
  email: string;

  @ApiModelProperty({ type: String, minLength: 8, maxLength: 20 })
  @IsAscii()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @Index({ unique: true })
  @Column()
  username: string;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  @VersionColumn()
  version?: number;

  @ApiModelProperty({ type: Image, isArray: true })
  @OneToMany(_ => Image, image => image.user)
  images?: Image[];

  @ApiModelProperty({ type: Profile })
  // FIXME: OneToOne downward cascade delete not implemented
  @OneToOne(type => Profile, { cascade: ['insert', 'remove'], nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  profile?: Profile;

  @ApiModelProperty({ type: String, readOnly: true })
  @RelationId((user: User) => user.profile)
  readonly profileId?: string;
}
