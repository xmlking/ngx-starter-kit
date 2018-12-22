import { Injectable, Inject } from '@angular/core';
import { WebSocketSubject } from './websocket-subject';
import { Actions, Store, getValue, ofActionDispatched, getActionTypeFromInstance } from '@ngxs/store';
import {
  ConnectWebSocket,
  DisconnectWebSocket,
  SendWebSocketAction,
  NGXS_WEBSOCKET_OPTIONS,
  NgxsWebsocketPluginOptions,
  AuthenticateWebSocket,
  WebsocketMessageError,
  WebSocketConnected,
  WebSocketDisconnected,
} from './symbols';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class WebSocketHandler {
  constructor(
    store: Store,
    actions: Actions,
    socket: WebSocketSubject,
    @Inject(NGXS_WEBSOCKET_OPTIONS) config: NgxsWebsocketPluginOptions,
  ) {
    actions.pipe(ofActionDispatched(ConnectWebSocket)).subscribe(event => socket.connect(event.payload));
    actions.pipe(ofActionDispatched(DisconnectWebSocket)).subscribe(event => socket.disconnect());
    actions.pipe(ofActionDispatched(SendWebSocketAction)).subscribe(({ payload }) => {
      const type = getActionTypeFromInstance(payload);
      socket.send({ ...payload, type });
    });
    actions.pipe(ofActionDispatched(AuthenticateWebSocket)).subscribe(event => socket.auth({ sumo: 1 }));
    socket.connectionStatus.pipe(distinctUntilChanged()).subscribe(status => {
      if (status) {
        store.dispatch(new WebSocketConnected({ socketId: socket.id }));
      } else {
        store.dispatch(new WebSocketDisconnected());
      }
    });
    socket.subscribe(
      msg => {
        const type = getValue(msg, config.typeKey);
        if (!type) {
          throw new Error(`Type ${type} not found on message`);
        }
        store.dispatch({ ...msg, type });
      },
      err => store.dispatch(new WebsocketMessageError(err)),
    );
  }
}
