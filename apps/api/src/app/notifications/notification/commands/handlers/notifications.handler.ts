import { NotificationService } from '../../notification.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GenericCommand } from '../../../../shared';
import { NotificationsDeleteCommand } from '../notifications-delete.command';
import { NotificationsMarkAsReadCommand } from '../notifications-make-as-read.command';
import { NotificationsMarkAllAsReadCommand } from '../notifications-make-all-as-read.command';
import { Logger } from '@nestjs/common';

@CommandHandler(GenericCommand)
export class NotificationsHandler implements ICommandHandler<GenericCommand> {
  private readonly logger = new Logger(NotificationsHandler.name);
  constructor(private readonly notificationService: NotificationService) {}

  public async execute(command: GenericCommand): Promise<void> {
    const { type, payload, user } = command;
    switch (type) {
      case NotificationsDeleteCommand.type: {
        return await this.notificationService.onDeleteNotification(new NotificationsDeleteCommand(payload, user));
      }
      case NotificationsMarkAsReadCommand.type: {
        return await this.notificationService.onMarkAsRead(new NotificationsMarkAsReadCommand(payload, user));
      }
      case NotificationsMarkAllAsReadCommand.type: {
        return await this.notificationService.onMarkAllAsRead(new NotificationsMarkAllAsReadCommand(payload, user));
      }
      default: {
        this.logger.error('received unknown command: ', command.type);
        // return  this.commandBus.execute(command);
      }
    }
  }
}
