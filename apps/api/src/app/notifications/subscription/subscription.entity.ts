import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { MaxLength, MinLength } from 'class-validator';
import { Column, CreateDateColumn, Entity, Index, UpdateDateColumn, VersionColumn } from 'typeorm';
import { Base } from '../../core/entities/base';

@Entity('subscription')
export class Subscription extends Base {
  @Index({ unique: true })
  @Column()
  endpoint: string;

  @Column()
  auth: string;

  @Column()
  p256dh: string;

  @Index()
  @Column()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @Column('text', { nullable: true, array: true })
  topics: string[];

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
