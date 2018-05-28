import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { AuthModule, AuthState } from '@ngx-starter-kit/auth';
import { NavigatorModule, MenuState } from '@ngx-starter-kit/navigator';
import { NgxsSocketioPluginModule } from '@ngx-starter-kit/socketio-plugin';
import { environment } from '@env/environment';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { EventBus } from './state/eventbus';
import { defaultMenu, demoMenu, adminMenu } from './menu-data';
import { PreferenceState } from './state/preference.state';
import { InMemoryDataService } from './services/in-memory-data.service';

// Noop handler for factory function
export function noop() {
  return function() {};
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPageScrollModule,
    NavigatorModule.forRoot(defaultMenu),
    NgxsModule.forRoot([AuthState, MenuState, PreferenceState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production, // Set to true for prod mode
      maxAge: 10
    }),
    NgxsSocketioPluginModule.forRoot({
      url: 'ws://localhost:8080/socket.io'
    }),
    NgxsRouterPluginModule.forRoot(),
    AuthModule.forRoot(),
    environment.envName === 'mock'
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          passThruUnknownUrl: true
          // delay: 500,
          // apiBase: 'api'
        })
      : []
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptor,
    //   multi: true
    // },
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [EventBus],
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
