import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AddNotification, DeleteNotification, MarkAllAsRead, MarkAsRead } from './notifications.actions';
import { SendWebSocketAction } from '@ngx-starter-kit/socketio-plugin';
import { SwPush } from '@angular/service-worker';
import { AppNotification } from '@ngx-starter-kit/notifications';

@Injectable({
  providedIn: 'root',
})
export class NotificationsHandler {
  constructor(private actions$: Actions, private store: Store, private readonly swPush: SwPush) {
    this.actions$
      .pipe(ofActionSuccessful(DeleteNotification))
      .subscribe(action => {console.log(action); this.store.dispatch(new SendWebSocketAction(action))});
    this.actions$
      .pipe(ofActionSuccessful(MarkAsRead))
      .subscribe(action => this.store.dispatch(new SendWebSocketAction(action)));
    this.actions$
      .pipe(ofActionSuccessful(MarkAllAsRead))
      .subscribe(action => this.store.dispatch(new SendWebSocketAction(action)));

    if (this.swPush.isEnabled) {
      // subscribe for new messages for testing
      this.swPush.messages.subscribe(message => {
        console.log('received push notification in NotificationsHandler', message);
        // TODO:
        // this.store.dispatch(new AddNotification(message as AppNotification));
      });
    }
  }
}
