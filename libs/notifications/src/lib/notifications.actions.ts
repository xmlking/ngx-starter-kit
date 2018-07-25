import { Notification } from './notification.model';

// Actions
export class FetchNotifications {
  static readonly type = '[Notifications] Fetch';
}

export class AddNotification {
  static readonly type = '[Notifications] Add';
  constructor(public readonly payload: Notification) {}
}

export class DeleteNotification {
  static readonly type = '[Notifications] Delete';

  constructor(public readonly payload: Notification) {}
}

export class MarkAsRead {
  static readonly type = '[Notifications] MarkAsRead';
  constructor(public readonly payload: Notification) {}
}

export class MarkAllAsRead {
  static readonly type = '[Notifications] MarkAllAsRead';
}
