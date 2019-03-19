import { IPagination } from '../../../core';
import { Notification } from '../notification.entity';
import { ApiModelProperty } from '@nestjs/swagger';

export class NotificationList implements IPagination<Notification> {
  @ApiModelProperty({ type: Notification, isArray: true })
  readonly items: Notification[];
  @ApiModelProperty({ type: Number, readOnly: true })
  readonly total: number;
}
