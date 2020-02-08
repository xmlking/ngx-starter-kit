import { IsAscii, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { Index } from 'typeorm';
import { NotificationColor, NotificationIcon, TargetType } from '../notification.entity';

export class UpdateNotificationDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(100)
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(100)
  readonly body: string;

  @IsNotEmpty()
  @IsAscii()
  @MinLength(3)
  @MaxLength(50)
  readonly target: string;

  @IsNotEmpty()
  @IsEnum(TargetType)
  readonly targetType: TargetType;

  @IsOptional()
  @IsEnum(NotificationIcon)
  readonly icon?: NotificationIcon = NotificationIcon.NOTIFICATIONS;

  @IsOptional()
  @IsEnum(NotificationColor)
  readonly color?: NotificationColor = NotificationColor.PRIMARY;

  @IsOptional()
  @IsBoolean()
  readonly native?: boolean = false;

  @IsOptional()
  @IsBoolean()
  @Index()
  readonly read?: boolean = false;
}
