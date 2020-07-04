import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { MaxLength, MinLength } from 'class-validator';
import { Column, CreateDateColumn, Entity, Index, UpdateDateColumn, VersionColumn } from 'typeorm';
import { Base } from '../../core/entities/base';

export enum TargetType {
  ALL = 'all',
  USER = 'user',
  TOPIC = 'topic',
}

export enum NotificationColor {
  WARN = 'warn',
  ACCENT = 'accent',
  PRIMARY = 'primary',
}

export enum NotificationIcon {
  NOTIFICATIONS = 'notifications',
  NOTIFICATIONS_ACTIVE = 'notifications_active',
  SHOPPING_BASKET = 'shopping_basket',
  EJECT = 'eject',
  CACHED = 'cached',
  CODE = 'code',
}

// TODO : use  CLI plugin https://docs.nestjs.com/recipes/swagger#plugin
@Entity('notification')
export class Notification extends Base {
  @MinLength(10)
  @MaxLength(100)
  @Column()
  title: string;

  @MinLength(10)
  @MaxLength(100)
  @Column()
  body: string;

  @MinLength(3)
  @MaxLength(20)
  @Index()
  @Column()
  target: string;

  @Column({ enum: ['all', 'user', 'topic'] })
  targetType: string;

  @Column({ enum: NotificationIcon, default: NotificationIcon.NOTIFICATIONS })
  icon?: NotificationIcon = NotificationIcon.NOTIFICATIONS;

  @Column({ enum: ['warn', 'accent', 'primary'], default: NotificationColor.PRIMARY })
  color?: NotificationColor = NotificationColor.PRIMARY;

  @Index()
  @Column({ default: false, type: 'boolean' })
  read? = false;

  @Index()
  @Column({ default: false, type: 'boolean' })
  native? = false;

  @Index()
  @Column({ default: true, type: 'boolean' })
  isActive? = true;

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
