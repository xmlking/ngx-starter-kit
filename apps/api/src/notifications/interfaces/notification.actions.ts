// Actions
export class AddNotification {
  static readonly type = '[Notifications] Add';
  constructor(public readonly payload: any) {}
}

export class DeleteNotification {
  static readonly type = '[Notifications] Delete';
  constructor(public readonly payload: any) {}
}
