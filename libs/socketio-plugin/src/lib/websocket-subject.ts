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

  private _socket: RxSocketioSubject<SocketIOEvent>;
  private _internalConfig: RxSocketioSubjectConfig<SocketIOEvent>;

  constructor(@Inject(NGXS_WEBSOCKET_OPTIONS) private _config: NgxsWebsocketPluginOptions) {
    super();

    this._internalConfig = {
      url: this._config.url,
      serializer: this._config.serializer,
      deserializer: this._config.deserializer,
      closeObserver: {
        next: (e: CloseEvent) => {
          this.connectionStatus.next(false);
        },
      },
      openObserver: {
        next: (e: Event) => this.connectionStatus.next(true),
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
        this._internalConfig.url = options.url;
      }

      if (options.connectOpts) {
        this._internalConfig.connectOpts = options.connectOpts;
      }

      if (options.serializer) {
        this._internalConfig.serializer = options.serializer;
      }

      if (options.deserializer) {
        this._internalConfig.deserializer = options.deserializer;
      }

      if (options.tokenFn && typeof options.tokenFn === 'function') {
        this._internalConfig.tokenFn = options.tokenFn;
      }
    }

    this._socket = new RxSocketioSubject<SocketIOEvent>(this._internalConfig);
    this._socket.subscribe((message: any) => this.next(message));
  }

  /**
   * Disconnected the websocket.
   */
  disconnect() {
    if (this._socket) {
      this._socket.complete();
      this._socket = undefined;
    }
  }

  /**
   * Send auth request to the websocket.
   */
  auth(data: any): void {
    if (!this._socket) {
      throw new Error('You must connect before Authenticate');
    }
    this._socket.next({ event: 'auth', data });
  }

  /**
   * Send action to the websocket.
   */
  send(data: any): void {
    if (!this._socket) {
      throw new Error('You must connect before sending data');
    }

    this._socket.next({ event: 'actions', data });
  }
}
