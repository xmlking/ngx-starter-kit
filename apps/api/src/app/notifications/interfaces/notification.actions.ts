// Actions

export class DeleteNotification {
  static readonly type = '[Notifications] Delete';
  constructor(public readonly payload: any) {}
}

export class MarkAsRead {
  static readonly type = '[Notifications] MarkAsRead';
  constructor(public readonly payload: any) {}
}

export class MarkAllAsRead {
  static readonly type = '[Notifications] MarkAllAsRead';
}
