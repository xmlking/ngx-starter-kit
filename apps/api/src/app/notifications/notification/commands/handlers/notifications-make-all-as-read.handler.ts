import { NotificationService } from '../../notification.service';
import { NotificationsMarkAllAsReadCommand } from '../notifications-make-all-as-read.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationsMarkAllAsReadCommand)
export class NotificationsMarkAsReadHandler implements ICommandHandler<NotificationsMarkAllAsReadCommand> {
  constructor(private readonly notificationService: NotificationService) {}

  public async execute(command: NotificationsMarkAllAsReadCommand): Promise<void> {
    console.log('command:NotificationsMarkAllAsReadCommand', command);
    await this.notificationService.onMarkAllAsRead(command);
  }
}
