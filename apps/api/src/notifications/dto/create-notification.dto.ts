import { ApiModelProperty } from '@nestjs/swagger';
import { IsAscii, IsBoolean, IsEnum, IsIn, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { NotificationColor, NotificationIcon } from '../notification.entity';

export class CreateNotificationDto {
  @ApiModelProperty({ type: String, enum: NotificationIcon, default: 'notifications' })
  @IsString()
  @IsNotEmpty()
  @IsEnum(NotificationIcon)
  icon: NotificationIcon;

  @ApiModelProperty({ type: String, minLength: 10, maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiModelProperty({ type: Boolean, default: false })
  @IsBoolean()
  @IsNotEmpty()
  read: boolean = false;

  @ApiModelProperty({ type: String, enum: NotificationColor })
  @IsString()
  @IsNotEmpty()
  @IsIn(['warn', 'accent', 'primary'])
  color?: NotificationColor;

  @ApiModelProperty({ type: String, minLength: 8, maxLength: 20, default: 'all' })
  @IsAscii()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  userId: string;
}
