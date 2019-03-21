import { OrderType, PaginationParams } from '../../../core';
import { Subscription } from '../subscription.entity';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindOwnSubscriptionsDto extends PaginationParams<Subscription> {
  @ApiModelPropertyOptional({ type: String, enum: ['ASC', 'DESC'] })
  @IsOptional()
  @Transform((val: string) => ({ createdAt: val === OrderType.ASC ? OrderType.ASC : OrderType.DESC }))
  readonly order = {
    createdAt: OrderType.DESC,
  };
}
