import { NotificationsHandler } from './notifications.handler';
import { NotificationsDeleteHandler } from './notifications-delete.handler';
import { NotificationsMarkAsReadHandler } from './notifications-make-as-read.handler';

export const CommandHandlers = [NotificationsHandler, NotificationsDeleteHandler, NotificationsMarkAsReadHandler];
