import { IPagination } from '../../../core';
import { Subscription } from '../subscription.entity';

export class SubscriptionList implements IPagination<Subscription> {
  readonly items: Subscription[];
  readonly total: number;
}
