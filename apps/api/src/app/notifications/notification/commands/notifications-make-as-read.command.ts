import { ICommand } from '@nestjs/cqrs';
import { User } from '@ngx-starter-kit/models';

export class NotificationsMarkAsReadCommand implements ICommand {
  static readonly type = '[Notifications] MarkAsRead';
  constructor(public readonly payload: any, public readonly user: User) {}
}
