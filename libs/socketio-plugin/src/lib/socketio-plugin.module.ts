import {
  NgModule,
  ModuleWithProviders,
  APP_INITIALIZER,
  InjectionToken
} from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsSocketioPluginOptions, NGXS_SOCKETIO_OPTIONS } from './symbols';
import { SocketioHandler } from './socketio-handler';
import { SocketioSubject } from './socketio-subject';
import { noop } from './symbols';

export function socketioOptionsFactory(options: NgxsSocketioPluginOptions) {
  return {
    reconnectInterval: 5000,
    reconnectAttempts: 10,
    typeKey: 'type',
    deserializer(e: MessageEvent) {
      return JSON.parse(e.data);
    },
    serializer(value: any) {
      return JSON.stringify(value);
    },
    ...options
  };
}

export const USER_OPTIONS = new InjectionToken('USER_OPTIONS');

@NgModule({
  imports: [NgxsModule]
})
export class NgxsSocketioPluginModule {
  static forRoot(options?: NgxsSocketioPluginOptions): ModuleWithProviders {
    return {
      ngModule: NgxsSocketioPluginModule,
      providers: [
        SocketioSubject,
        SocketioHandler,
        {
          provide: USER_OPTIONS,
          useValue: options
        },
        {
          provide: NGXS_SOCKETIO_OPTIONS,
          useFactory: socketioOptionsFactory,
          deps: [USER_OPTIONS]
        },
        {
          provide: APP_INITIALIZER,
          useFactory: noop,
          deps: [SocketioHandler],
          multi: true
        }
      ]
    };
  }
}
