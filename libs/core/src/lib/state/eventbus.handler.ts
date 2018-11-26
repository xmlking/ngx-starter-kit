import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import {
  AuthenticateWebSocket,
  ConnectWebSocket,
  DisconnectWebSocket,
  WebSocketConnected,
  WebSocketDisconnected,
} from '@ngx-starter-kit/socketio-plugin';

@Injectable({
  providedIn: 'root',
})
export class EventBusHandler {
  constructor(private actions$: Actions, private store: Store) {
    this.actions$
      .pipe(ofActionSuccessful(ConnectWebSocket))
      .subscribe(action => console.log('ConnectWebSocket........Action Successful'));
    this.actions$
      .pipe(ofActionSuccessful(DisconnectWebSocket))
      .subscribe(action => console.log('DisconnectWebSocket........Action Successful'));
    this.actions$.pipe(ofActionSuccessful(WebSocketConnected)).subscribe(action => {
      console.log('WebSocketConnected........Action Successful');
      this.store.dispatch(new AuthenticateWebSocket());
    });
    this.actions$
      .pipe(ofActionSuccessful(WebSocketDisconnected))
      .subscribe(action => console.log('WebSocketDisconnected........Action Successful'));
  }
}
