import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsAscii, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { NotificationColor, NotificationIcon, TargetType } from '../notification.entity';
import { Index } from 'typeorm';

export class UpdateNotificationDto {
  @ApiModelProperty({ type: String, minLength: 10, maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiModelProperty({ type: String, minLength: 10, maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  readonly body: string;

  @ApiModelProperty({ type: String, minLength: 3, maxLength: 50 })
  @IsNotEmpty()
  @IsAscii()
  @MinLength(3)
  @MaxLength(50)
  readonly target: string;

  @ApiModelProperty({ type: String, enum: TargetType })
  @IsNotEmpty()
  @IsEnum(TargetType)
  readonly targetType: TargetType;

  @ApiModelPropertyOptional({ type: String, enum: NotificationIcon, default: NotificationIcon.NOTIFICATIONS })
  @IsOptional()
  @IsEnum(NotificationIcon)
  readonly icon?: NotificationIcon;

  @ApiModelPropertyOptional({ type: String, enum: NotificationColor, default: NotificationColor.PRIMARY })
  @IsOptional()
  @IsEnum(NotificationColor)
  readonly color?: NotificationColor;

  @ApiModelPropertyOptional({ type: Boolean, default: false })
  @IsOptional()
  @IsBoolean()
  readonly native?: boolean;

  @ApiModelPropertyOptional({ type: Boolean, default: false })
  @IsOptional()
  @IsBoolean()
  @Index()
  readonly read?: boolean;
}
