import { NextObserver, Observable, Observer, Subscriber } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import * as io from 'socket.io-client';

export interface RxSocketioSubjectConfig<T> {
  /** The url of the socket server to connect to */
  url: string;
  /** The protocol to use to connect */
  protocol?: string | Array<string>;
  /** @deprecated use {@link deserializer} */
  resultSelector?: (e: MessageEvent) => T;
  /**
   * A serializer used for messages arriving on the over the socket from the
   * server. Defaults to JSON.parse.
   */
  serializer?: (value: T) => WebSocketMessage;
  /**
   * A deserializer used to create messages from passed values before the
   * messages are sent to the server. Defaults to JSON.stringify
   */
  deserializer?: (e: MessageEvent) => T;
  /**
   * An Observer that watches when open events occur on the underlying web socket.
   */
  openObserver?: NextObserver<Event>;
  /**
   * An Observer than watches when close events occur on the underlying webSocket
   */
  closeObserver?: NextObserver<CloseEvent>;
  /**
   * An Observer that watches when a close is about to occur due to
   * unsubscription.
   */
  closingObserver?: NextObserver<void>;
  /**
   * A WebSocket constructor to use. This is useful for situations like using a
   * WebSocket impl in Node (WebSocket is a DOM API), or for mocking a WebSocket
   * for testing purposes
   */
  WebSocketCtor?: {
    new (url: string, protocols?: string | string[]): WebSocket;
  };
  /** Sets the `binaryType` property of the underlying WebSocket. */
  binaryType?: 'blob' | 'arraybuffer';
}

const DEFAULT_SOCKETIO_CONFIG: RxSocketioSubjectConfig<any> = {
  url: '',
  deserializer: (e: MessageEvent) => JSON.parse(e.data),
  serializer: (value: any) => JSON.stringify(value)
};

const WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT =
  'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';

export type WebSocketMessage = string | ArrayBuffer | Blob | ArrayBufferView;

export class RxSocketioSubject<T> extends AnonymousSubject<T> {
  private _config: RxSocketioSubjectConfig<T>;
  private _socket: SocketIOClient.Socket;

  constructor(
    urlConfigOrSource: string | RxSocketioSubjectConfig<T> | Observable<T>,
    destination?: Observer<T>
  ) {
    super();

    const config = (this._config = { ...DEFAULT_SOCKETIO_CONFIG });

    if (typeof urlConfigOrSource === 'string') {
      config.url = urlConfigOrSource;
    } else {
      for (const key in urlConfigOrSource) {
        if (urlConfigOrSource.hasOwnProperty(key)) {
          config[key] = urlConfigOrSource[key];
        }
      }
    }

    this._socket = io(config.url);

    this._socket.on('connect', event => config.openObserver.next(event));

    this._socket.on('disconnect', event => config.closeObserver.next(event));

    this.destination = Subscriber.create(
      (message: T) => {
        this._socket.send(message);
      },
      error => {
        this._socket.close();
        const errorEvent = new ErrorEvent('', {
          message: 'Error in data stream.',
          error: error
        });
        super.error.call(this, errorEvent);
      },
      () => {
        this._socket.close();
        const closeEvent = new CloseEvent('cloased', {
          code: 1000,
          reason: 'Connection closed by client.',
          wasClean: true
        });
        config.closeObserver.next(closeEvent);
      }
    );
  }

  next(value?: T) {
    this.destination.next.call(this.destination, value);
  }

  error(err?) {
    this.destination.error.call(this.destination, err);
  }

  complete() {
    this.destination.complete.call(this.destination);
  }
}
