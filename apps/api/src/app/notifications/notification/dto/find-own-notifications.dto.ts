import { OrderType, PaginationParams } from '../../../core';
import { Notification } from '../notification.entity';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindOwnNotificationsDto extends PaginationParams<Notification> {
  @ApiModelPropertyOptional({ type: String, enum: ['ASC', 'DESC'] })
  @IsOptional()
  @Transform((val: string) => ({ createdAt: val === OrderType.ASC ? OrderType.ASC : OrderType.DESC }))
  readonly order = {
    createdAt: OrderType.DESC,
  };
}
