import { AppNotification } from './app-notification.model';

// Actions
export class FetchNotifications {
  static readonly type = '[Notifications] Fetch';
}
// new AddNotification(
//   { id: 6,
//     icon: 'notifications',
//      message: 'sumo',
//      createdAt: new Date(Date.now() - 864e5),
//      read: false,
//      native: true
//     }
//   ),
export class AddNotification {
  static readonly type = '[Notifications] Add';
  constructor(public readonly payload: AppNotification) {}
}

export class DeleteNotification {
  static readonly type = '[Notifications] Delete';
  constructor(public readonly payload: AppNotification) {}
}

export class MarkAsRead {
  static readonly type = '[Notifications] MarkAsRead';
  constructor(public readonly payload: AppNotification) {}
}

export class MarkAllAsRead {
  static readonly type = '[Notifications] MarkAllAsRead';
}
