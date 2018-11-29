import { Column, CreateDateColumn, Entity, Index, UpdateDateColumn, VersionColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsAscii, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Base } from '../core/entities/base.entity';

@Entity('subscription')
export class Subscription extends Base {
  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsUrl({}, { message: 'endpoint must be a valid url.' })
  @Index({ unique: true })
  @Column()
  endpoint: string;

  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @Column({})
  auth: string;

  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @Column({})
  p256dh: string;

  @ApiModelProperty({ type: String, minLength: 8, maxLength: 20 })
  @IsAscii()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @Index()
  @Column()
  userId: string;

  @ApiModelProperty({ type: String, isArray: true })
  @Column('text', { array: true })
  topics: string[];

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn()
  createdAt?: Date;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn()
  updatedAt?: Date;

  @Exclude()
  @VersionColumn()
  version?: number;
}
