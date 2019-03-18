import { OrderType, PaginationParams } from '../../../core';
import { Notification, TargetType } from '../notification.entity';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsAscii, IsBoolean, IsEnum, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindNotificationsDto extends PaginationParams<Notification> {
  @ApiModelPropertyOptional({ type: String, minLength: 3, maxLength: 50 })
  @IsOptional()
  @IsNotEmpty()
  @IsAscii()
  @MinLength(3)
  @MaxLength(50)
  readonly target?: any;

  @ApiModelPropertyOptional({ type: String, /*enum: TargetType */ enum: ['all', 'user', 'topic'] })
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(TargetType)
  readonly targetType?: string;

  @ApiModelPropertyOptional({ type: Boolean, default: false })
  @Transform((val: string) => (  val === 'true'  ))
  @IsOptional()
  @IsBoolean()
  readonly read = false;

  @ApiModelPropertyOptional({ type: Boolean, default: true })
  @Transform((val: string) => (  val === 'true'  ))
  @IsOptional()
  @IsBoolean()
  readonly isActive = true;

  @ApiModelPropertyOptional({ type: String, enum: ['ASC', 'DESC'] })
  @IsOptional()
  @Transform((val: string) => ({ createdAt: val === OrderType.ASC ? OrderType.ASC : OrderType.DESC }))
  readonly order = {
    createdAt: OrderType.DESC,
  };

  constructor(values: Partial<FindNotificationsDto>) {
    super();
    Object.assign(this, values);
  }
}
