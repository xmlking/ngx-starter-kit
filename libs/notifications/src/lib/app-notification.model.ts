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
  notifications = 'notifications',
  notifications_active = 'notifications_active',
  shopping_basket = 'shopping_basket',
  eject = 'eject',
  cached = 'cached',
  code = 'code',
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
  public createdAt: Date;
  public updatedAt?: Date;
}
