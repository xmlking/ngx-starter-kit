import { IPagination } from '../../../core';
import { Subscription } from '../subscription.entity';
import { ApiModelProperty } from '@nestjs/swagger';

export class SubscriptionList implements IPagination<Subscription> {
  @ApiModelProperty({ type: Subscription, isArray: true })
  readonly items: Subscription[];
  @ApiModelProperty({ type: Number, readOnly: true })
  readonly total: number;
}
