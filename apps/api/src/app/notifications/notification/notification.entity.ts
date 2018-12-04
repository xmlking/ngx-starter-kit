import { Column, CreateDateColumn, Entity, Index, UpdateDateColumn, VersionColumn } from 'typeorm';
import { Base } from '../../core/entities/base.entity';
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
  notifications = 'notifications',
  notifications_active = 'notifications_active',
  shopping_basket = 'shopping_basket',
  eject = 'eject',
  cached = 'cached',
  code = 'code',
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

  @ApiModelProperty({ type: String, enum: NotificationIcon, default: NotificationIcon.notifications })
  @Column({ enum: NotificationIcon, default: NotificationIcon.notifications })
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

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @CreateDateColumn()
  createdAt?: Date;

  @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
  @UpdateDateColumn()
  updatedAt?: Date;

  @Exclude()
  @VersionColumn()
  version?: number;

  @ApiModelProperty({ type: Boolean, default: true })
  @Index()
  @Column({ default: true })
  isActive: boolean;
}
