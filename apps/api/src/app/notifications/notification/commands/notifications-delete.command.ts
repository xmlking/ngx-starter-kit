import { ICommand } from '@nestjs/cqrs';
import { User } from '@ngx-starter-kit/models';

export class NotificationsDeleteCommand implements ICommand {
  static readonly type = '[Notifications] Delete';
  constructor(public readonly payload: any, public readonly user: User) {}
}
