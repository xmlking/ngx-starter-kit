import { Transform } from 'class-transformer';
import { IsAscii, IsBoolean, IsEnum, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { OrderType, PaginationParams } from '../../../core';
import { Notification, TargetType } from '../notification.entity';

export class FindNotificationsDto extends PaginationParams<Notification> {
  @IsOptional()
  @IsNotEmpty()
  @IsAscii()
  @MinLength(3)
  @MaxLength(50)
  readonly target?: any;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(TargetType)
  readonly targetType?: string;

  @Transform((val: string) => val === 'true')
  @IsOptional()
  @IsBoolean()
  readonly read?: boolean = false;

  @Transform((val: string) => val === 'true')
  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean = true;

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
