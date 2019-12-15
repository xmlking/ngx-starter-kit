import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { OrderType, PaginationParams } from '../../../core';
import { Subscription } from '../subscription.entity';

export class FindOwnSubscriptionsDto extends PaginationParams<Subscription> {
  @IsOptional()
  @Transform((val: string) => ({ createdAt: val === OrderType.ASC ? OrderType.ASC : OrderType.DESC }))
  readonly order = {
    createdAt: OrderType.DESC,
  };
}
