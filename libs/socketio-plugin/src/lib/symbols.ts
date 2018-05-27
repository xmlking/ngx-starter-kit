import { InjectionToken } from '@angular/core';

export const NGXS_SOCKETIO_OPTIONS = new InjectionToken(
  'NGXS_SOCKETIO_OPTIONS'
);

export interface NgxsSocketioPluginOptions {
  /**
   * URL of the socketio.
   */
  url?: string;

  /**
   * The property name to distigunish this type for the store.
   * Default: 'type'
   */
  typeKey?: string;

  /**
   * Interval to try and reconnect.
   * Default: 5000
   */
  reconnectInterval?: number;

  /**
   * Number of reconnect attemps.
   * Default: 10
   */
  reconnectAttempts?: number;

  /**
   * Serializer to call before sending messages
   * Default: `json.stringify`
   */
  serializer?: (data: any) => string;

  /**
   * Deseralizer before publishing the message.
   */
  deserializer?: (e: MessageEvent) => any;
}

export function noop(arg) {
  return function() {};
}

/**
 * Action to connect to the websocket. Optionally pass a URL.
 */
export class ConnectSocketio {
  static readonly type = '[Socketio] Connect';
  constructor(public payload?: string) {}
}

/**
 * Action triggered when a error ocurrs
 */
export class SocketioMessageError {
  static readonly type = '[Socketio] Message Error';
  constructor(public payload: any) {}
}

/**
 * Action to disconnect the Socketio.
 */
export class DisconnectSocketio {
  static readonly type = '[Socketio] Disconnect';
}

/**
 * Action to send to the server.
 */
export class SendSocketioMessage {
  static readonly type = '[Socketio] Send Message';
  constructor(public payload: any) {}
}
