import { Entity } from '@ngx-starter-kit/shared';

export enum TargetType {
  ALL = 'all',
  USER = 'user',
  TOPIC = 'topic',
}
export enum NotificationColor {
  WARN = 'warn',
  ACCENT = 'accent',
  PRIMARY = 'primary',
}

export enum NotificationIcon {
  NOTIFICATIONS = 'notifications',
  NOTIFICATIONS_ACTIVE = 'notifications_active',
  SHOPPING_BASKET = 'shopping_basket',
  EJECT = 'eject',
  CACHED = 'cached',
  CODE = 'code',
}

export class AppNotification extends Entity {
  public id: number;
  public title: string;
  public body: string;
  public target: string;
  public targetType: TargetType;
  public icon: NotificationIcon;
  public color: NotificationColor;
  public read: boolean;
  public native: boolean;
  public isActive: boolean;
  public createdAt: Date;
  public updatedAt?: Date;
}
