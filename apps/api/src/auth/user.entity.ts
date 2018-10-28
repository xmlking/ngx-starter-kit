import { Column, CreateDateColumn, Entity, Index, OneToMany, UpdateDateColumn, VersionColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsAscii, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Base } from '../core';

export enum AccountSourceType {
  msId,
  hsId,
  gitHub,
}

@Entity('user')
export class User extends Base {
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
  userId: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @VersionColumn()
  version?: number;
}
