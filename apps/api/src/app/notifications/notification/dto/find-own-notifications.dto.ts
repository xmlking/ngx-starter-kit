import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { OrderType, PaginationParams } from '../../../core';
import { Notification } from '../notification.entity';

export class FindOwnNotificationsDto extends PaginationParams<Notification> {
  @IsOptional()
  @Transform(({ value }) => ({ createdAt: value === OrderType.ASC ? OrderType.ASC : OrderType.DESC }))
  readonly order = {
    createdAt: OrderType.DESC,
  };
}
