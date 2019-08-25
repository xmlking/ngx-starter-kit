import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { NotificationService } from '../../notification.service';
import { NotificationsDeleteCommand } from '../notifications-delete.command';

@CommandHandler(NotificationsDeleteCommand)
export class NotificationsDeleteHandler implements ICommandHandler<NotificationsDeleteCommand> {
  constructor(private readonly notificationService: NotificationService) {}

  public async execute(command: NotificationsDeleteCommand): Promise<void> {
    console.log('command:DeleteNotificationCommand', command);
    await this.notificationService.onDeleteNotification(command);
  }
}
