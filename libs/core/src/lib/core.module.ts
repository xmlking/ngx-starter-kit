import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormlyModule } from '@ngx-formly/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { AuthModule, AuthState } from '@ngx-starter-kit/auth';
import { MenuState, NavigatorModule } from '@ngx-starter-kit/navigator';
import { NgxsWebsocketPluginModule } from '@ngx-starter-kit/socketio-plugin';
import { environment } from '@env/environment';

import { InMemoryDataService } from './services/in-memory-data.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { CustomRouterStateSerializer } from './state/custom-router-state.serializer';
import { _window, WINDOW } from './services/window.token';

import { defaultMenu } from './menu-data';

import { AppState } from './state/app.state';
import { PreferenceState } from './state/preference.state';

import { AppHandler } from './state/app.handler';
import { RouteHandler } from './state/route.handler';
import { EventBusHandler } from './state/eventbus.handler';
import { GoogleAnalyticsService } from './services/google-analytics.service';

// Noop handler for factory function
export function noop() {
  return function() {};
}

/**
 * add icons that are needed during app boot up here.
 * if more icons are needed, load them in respective modules and add FontAwesomeModule to it.
 * for convenience, we also added FontAwesomeModule to SharedModule.
 */
library.add(faTwitter, faGithub, faGoogle);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    MatSnackBarModule,
    NgxPageScrollModule,
    NavigatorModule.forRoot(defaultMenu),
    NgxsModule.forRoot([AuthState, MenuState, PreferenceState, AppState], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot({
      key: ['preference', 'app.installed'],
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production, // Set to true for prod mode
      maxAge: 10,
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsWebsocketPluginModule.forRoot({
      url: environment.WS_EVENT_BUS_URL,
    }),
    NgxsRouterPluginModule.forRoot(),
    AuthModule.forRoot(),
    FormlyModule.forRoot(),
    environment.envName === 'mock'
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          passThruUnknownUrl: true,
          delay: 1000,
          // apiBase: 'api'
        })
      : [],
  ],
  providers: [
    GoogleAnalyticsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [EventBusHandler, RouteHandler, AppHandler],
      multi: true,
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer,
    },
    { provide: WINDOW, useFactory: _window },
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
