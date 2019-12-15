import { IPagination } from '../../../core';
import { Notification } from '../notification.entity';

export class NotificationList implements IPagination<Notification> {
  readonly items: Notification[];
  readonly total: number;
}
