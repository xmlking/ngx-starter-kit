import { Injectable, Inject } from '@angular/core';
import { SocketioSubject } from './socketio-subject';
import { Actions, Store, getValue, ofActionDispatched } from '@ngxs/store';
import {
  ConnectSocketio,
  DisconnectSocketio,
  SendSocketioMessage,
  NGXS_SOCKETIO_OPTIONS,
  NgxsSocketioPluginOptions,
  SocketioMessageError
} from './symbols';

@Injectable()
export class SocketioHandler {
  constructor(
    store: Store,
    actions: Actions,
    socket: SocketioSubject,
    @Inject(NGXS_SOCKETIO_OPTIONS) config: NgxsSocketioPluginOptions
  ) {
    actions
      .pipe(ofActionDispatched(ConnectSocketio))
      .subscribe(event => socket.connect(event.payload));
    actions
      .pipe(ofActionDispatched(DisconnectSocketio))
      .subscribe(event => socket.disconnect());
    actions
      .pipe(ofActionDispatched(SendSocketioMessage))
      .subscribe(({ payload }) => socket.send(payload));
    socket.subscribe(
      msg => {
        const type = getValue(msg, config.typeKey);
        if (!type) {
          throw new Error(`Type ${type} not found on message`);
        }
        store.dispatch({ ...msg, type });
      },
      err => store.dispatch(new SocketioMessageError(err))
    );
  }
}
