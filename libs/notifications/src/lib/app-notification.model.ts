import { Entity } from '@ngx-starter-kit/shared';

export class AppNotification extends Entity {
  public id: number;
  public icon: 'notifications' | 'notifications_active' | 'shopping_basket' | 'eject' | 'cached' | 'code';
  public message: string;
  public createdAt: Date;
  public read: boolean;
  public color: 'warn' | 'accent' | 'primary';
  public native: boolean;
}
