import { ICommand } from '@nestjs/cqrs';
import { User } from '@ngx-starter-kit/models';

export class NotificationsMarkAllAsReadCommand implements ICommand {
  static readonly type = '[Notifications] MarkAllAsRead';
  constructor(public readonly payload: any, public readonly user: User) {}
}
