import {
  Actions,
  ofActionSuccessful,
  ofActionErrored,
  ofActionDispatched,
  Store,
} from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Login } from '@ngx-starter-kit/auth';
import {
  ConnectWebSocket,
  DisconnectWebSocket,
  WebSocketDisconnected,
  WebSocketConnected,
  AuthenticateWebSocket,
} from '@ngx-starter-kit/socketio-plugin';

@Injectable({
  providedIn: 'root',
})
export class EventBus {
  constructor(private actions$: Actions, private store: Store) {
    this.actions$
      .pipe(ofActionDispatched(Login))
      .subscribe(action => console.log('Login.......Action Dispatched'));
    this.actions$
      .pipe(ofActionSuccessful(Login))
      .subscribe(action => console.log('Login........Action Successful'));
    this.actions$
      .pipe(ofActionErrored(Login))
      .subscribe(action => console.log('Login........Action Errored'));
    this.actions$
      .pipe(ofActionSuccessful(ConnectWebSocket))
      .subscribe(action =>
        console.log('ConnectWebSocket........Action Successful'),
      );
    this.actions$
      .pipe(ofActionSuccessful(DisconnectWebSocket))
      .subscribe(action =>
        console.log('DisconnectWebSocket........Action Successful'),
      );
    this.actions$
      .pipe(ofActionSuccessful(WebSocketConnected))
      .subscribe(action => {
        console.log('WebSocketConnected........Action Successful');
        this.store.dispatch(new AuthenticateWebSocket());
      });
    this.actions$
      .pipe(ofActionSuccessful(WebSocketDisconnected))
      .subscribe(action =>
        console.log('WebSocketDisconnected........Action Successful'),
      );
  }
}
