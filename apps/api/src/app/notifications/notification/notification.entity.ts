import { Column, CreateDateColumn, Entity, Index, UpdateDateColumn, VersionColumn } from 'typeorm';
import { Base } from '../../core/entities/base';
import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

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

@Entity('notification')
export class Notification extends Base {
  @ApiModelProperty({ type: String, minLength: 10, maxLength: 100 })
  @Column()
  title: string;

  @ApiModelProperty({ type: String, minLength: 10, maxLength: 100 })
  @Column()
  body: string;

  @ApiModelProperty({ type: String, minLength: 3, maxLength: 20 })
  @Index()
  @Column()
  target: string;

  @ApiModelProperty({ type: String, enum: TargetType })
  @Column({ enum: ['all', 'user', 'topic'] })
  targetType: string;

  @ApiModelProperty({ type: String, enum: NotificationIcon, default: NotificationIcon.NOTIFICATIONS })
  @Column({ enum: NotificationIcon, default: NotificationIcon.NOTIFICATIONS })
  icon?: NotificationIcon;

  @ApiModelProperty({ type: String, enum: NotificationColor, default: NotificationColor.PRIMARY })
  @Column({ enum: ['warn', 'accent', 'primary'], default: NotificationColor.PRIMARY })
  color?: NotificationColor;

  @ApiModelProperty({ type: Boolean, default: false })
  @Index()
  @Column({ default: false })
  read?: boolean;

  @ApiModelProperty({ type: Boolean, default: false })
  @Index()
  @Column({ default: false })
  native?: boolean;

  @ApiModelProperty({ type: Boolean, default: true })
  @Index()
  @Column({ default: true })
  isActive?: boolean;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;

  @Exclude()
  @VersionColumn()
  version?: number;
}
