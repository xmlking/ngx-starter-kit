import { Column, CreateDateColumn, Entity, Index } from 'typeorm';
import { Base } from '../core/entities/base.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsAscii, IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

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
  @ApiModelProperty({ type: String, enum: NotificationIcon, default: NotificationIcon.notifications })
  @IsString()
  @IsNotEmpty()
  @Column()
  icon: NotificationIcon;

  @ApiModelProperty({ type: String, minLength: 10, maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Column()
  message: string;

  @ApiModelProperty({ type: 'string', format: 'date-time',  example: '2018-11-21T06:20:32.232Z'})
  @CreateDateColumn()
  createdAt?: Date;

  @ApiModelProperty({ type: Boolean, default: false })
  @IsBoolean()
  @IsNotEmpty()
  @Index()
  @Column()
  read: boolean;

  @ApiModelProperty({ type: String, enum: NotificationColor, default: NotificationColor.PRIMARY })
  @IsString()
  @IsNotEmpty()
  @Column({ enum: ['warn', 'accent', 'primary'] })
  color?: NotificationColor;

  @ApiModelProperty({ type: String, minLength: 8, maxLength: 20 })
  @IsAscii()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @Index()
  @Column()
  userId: string;

  @ApiModelProperty({ type: Boolean, default: false })
  @IsBoolean()
  @IsNotEmpty()
  @Index()
  @Column({ default: false })
  native: boolean;
}
