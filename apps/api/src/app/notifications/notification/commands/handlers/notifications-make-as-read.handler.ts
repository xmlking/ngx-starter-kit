import { NotificationService } from '../../notification.service';
import { NotificationsMarkAsReadCommand } from '../notifications-make-as-read.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(NotificationsMarkAsReadCommand)
export class NotificationsMarkAsReadHandler implements ICommandHandler<NotificationsMarkAsReadCommand> {
  constructor(private readonly notificationService: NotificationService) {}

  public async execute(command: NotificationsMarkAsReadCommand): Promise<void> {
    console.log('command:NotificationsMarkAsReadCommand', command);
    await this.notificationService.onMarkAsRead(command);
  }
}
