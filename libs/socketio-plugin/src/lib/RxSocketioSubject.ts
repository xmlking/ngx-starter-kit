import { NextObserver, Observable, Observer, Subscriber, Subscription, Subject } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import * as io_ from 'socket.io-client';
import ConnectOpts = SocketIOClient.ConnectOpts;

const io = io_;

// TODO https://github.com/arjitkhullar/ocr/blob/master/src/app/socket.service.ts

export interface RxSocketioSubjectConfig<T> {
  /** The url of the socket server to connect to */
  url: string;
  /** connect options for Socket.io */
  connectOpts?: ConnectOpts;
  /** auth token access callback function */
  tokenFn?: () => string;
  /** The protocol to use to connect */
  protocol?: string | Array<string>;
  /** @deprecated use {@link deserializer} */
  resultSelector?: (e: MessageEvent) => T;
  /**
   * A serializer used to create messages from passed values before the
   * messages are sent to the server. Defaults to JSON.stringify.
   */
  serializer?: (value: T) => WebSocketMessage;
  /**
   * A deserializer used for messages arriving on the socket from the
   * server. Defaults to JSON.parse.
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
  WebSocketCtor?: new (url: string, protocols?: string | string[]) => WebSocket;
  /** Sets the `binaryType` property of the underlying WebSocket. */
  binaryType?: 'blob' | 'arraybuffer';
}

const DEFAULT_WEBSOCKET_CONFIG: RxSocketioSubjectConfig<any> = {
  url: '',
  deserializer: (e: MessageEvent) => JSON.parse(e.data),
  serializer: (value: any) => JSON.stringify(value),
};

export type WebSocketMessage = string | ArrayBuffer | Blob | ArrayBufferView;

export class RxSocketioSubject<T> extends AnonymousSubject<T> {
  private outputPrivate: Subject<T>;
  private configPrivate: RxSocketioSubjectConfig<T>;
  private socketPrivate: SocketIOClient.Socket;

  constructor(urlConfigOrSource: string | RxSocketioSubjectConfig<T> | Observable<T>, destination?: Observer<T>) {
    super();

    const config = (this.configPrivate = { ...DEFAULT_WEBSOCKET_CONFIG });

    if (typeof urlConfigOrSource === 'string') {
      config.url = urlConfigOrSource;
    } else {
      for (const key in urlConfigOrSource) {
        if (urlConfigOrSource.hasOwnProperty(key)) {
          config[key] = urlConfigOrSource[key];
        }
      }
    }

    if (config.tokenFn && typeof config.tokenFn === 'function') {
      if (!config.connectOpts) {
        config.connectOpts = { query: {} };
      }
      (config.connectOpts.query as any).token = config.tokenFn();
    }

    this.outputPrivate = new Subject<T>();

    this.socketPrivate = config.connectOpts ? io(config.url, config.connectOpts) : io(config.url);

    this.socketPrivate.on('connect', event =>
      config.openObserver.next(new CustomEvent('opened', { detail: { id: this.socketPrivate.id } })),
    );

    this.socketPrivate.on('disconnect', event => config.closeObserver.next(event));

    this.socketPrivate.on('actions', data => this.outputPrivate.next(data));

    this.socketPrivate.on('reconnect_attempt', () => {
      if (config.tokenFn && typeof config.tokenFn === 'function') {
        (this.socketPrivate.io.opts.query as any).token = config.tokenFn();
      }
    });

    this.destination = Subscriber.create(
      (message: T) => {
        this.socketPrivate.emit((message as any).event, (message as any).data);
      },
      error => {
        this.socketPrivate.close();
        const errorEvent = new ErrorEvent('', {
          message: 'Error in data stream.',
          error,
        });
        super.error.call(this, errorEvent);
      },
      () => {
        this.socketPrivate.close();
        const closeEvent = new CloseEvent('cloased', {
          code: 1000,
          reason: 'Connection closed by client.',
          wasClean: true,
        });
        config.closeObserver.next(closeEvent);
      },
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

  _subscribe(subscriber: Subscriber<T>): Subscription {
    const subscription = new Subscription();
    subscription.add(this.outputPrivate.subscribe(subscriber));
    return subscription;
  }

  unsubscribe() {
    // tslint:disable
    super.unsubscribe();
  }
}
