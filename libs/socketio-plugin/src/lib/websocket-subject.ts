import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { WebSocketSubject as RxWebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { NGXS_WEBSOCKET_OPTIONS, NgxsWebsocketPluginOptions } from './symbols';
import { RxSocketioSubject, RxSocketioSubjectConfig } from './RxSocketioSubject';

export interface SocketIOEvent<T = any> {
  event: string;
  data: T;
}

@Injectable()
export class WebSocketSubject extends Subject<any> {
  /**
   * The connection status of the websocket.
   */
  connectionStatus = new Subject<boolean>();
  private idPrivate: string;
  get id() {
    return this.idPrivate;
  }

  private socketPrivate: RxSocketioSubject<SocketIOEvent>;
  private internalConfigPrivate: RxSocketioSubjectConfig<SocketIOEvent>;

  constructor(@Inject(NGXS_WEBSOCKET_OPTIONS) private configPrivate: NgxsWebsocketPluginOptions) {
    super();

    this.internalConfigPrivate = {
      url: this.configPrivate.url,
      serializer: this.configPrivate.serializer,
      deserializer: this.configPrivate.deserializer,
      closeObserver: {
        next: (e: CloseEvent) => {
          this.connectionStatus.next(false);
        },
      },
      openObserver: {
        next: (e: CustomEvent) => {
          if (e.detail.id) {
            this.idPrivate = e.detail.id;
          }
          this.connectionStatus.next(true);
        },
      },
    };
  }

  /**
   * Kickoff the connection to the websocket.
   */
  connect(options?: NgxsWebsocketPluginOptions) {
    // Users can pass the options in the connect method so
    // if options aren't available at DI bootstrap they have access
    // to pass them here
    if (options) {
      if (options.url) {
        this.internalConfigPrivate.url = options.url;
      }

      if (options.connectOpts) {
        this.internalConfigPrivate.connectOpts = options.connectOpts;
      }

      if (options.serializer) {
        this.internalConfigPrivate.serializer = options.serializer;
      }

      if (options.deserializer) {
        this.internalConfigPrivate.deserializer = options.deserializer;
      }

      if (options.tokenFn && typeof options.tokenFn === 'function') {
        this.internalConfigPrivate.tokenFn = options.tokenFn;
      }
    }

    this.socketPrivate = new RxSocketioSubject<SocketIOEvent>(this.internalConfigPrivate);
    this.socketPrivate.subscribe((message: any) => this.next(message));
  }

  /**
   * Disconnected the websocket.
   */
  disconnect() {
    if (this.socketPrivate) {
      this.socketPrivate.complete();
      this.socketPrivate = undefined;
    }
  }

  /**
   * Send auth request to the websocket.
   */
  auth(data: any): void {
    if (!this.socketPrivate) {
      throw new Error('You must connect before Authenticate');
    }
    this.socketPrivate.next({ event: 'auth', data });
  }

  /**
   * Send action to the websocket.
   */
  send(data: any): void {
    if (!this.socketPrivate) {
      throw new Error('You must connect before sending data');
    }

    this.socketPrivate.next({ event: 'actions', data });
  }
}
