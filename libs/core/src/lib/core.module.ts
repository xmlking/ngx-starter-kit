import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '@env/environment';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FormlyModule } from '@ngx-formly/core';
import { AuthModule } from '@ngx-starter-kit/auth';
import { MenuState, NavigatorModule } from '@ngx-starter-kit/navigator';
import { NgxsWebsocketPluginModule } from '@ngx-starter-kit/socketio-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { defaultMenu } from './menu-data';
import { AppConfigService } from './services/app-config.service';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { WINDOW, _window } from './services/window.token';
import { AppHandler } from './state/app.handler';
import { AppState } from './state/app.state';
import { CustomRouterStateSerializer } from './state/custom-router-state.serializer';
import { EventBusHandler } from './state/eventbus.handler';
import { PreferenceState } from './state/preference.state';
import { ProfileState } from './state/profile.state';
import { RouteHandler } from './state/route.handler';

// appConfig initializer factory function
const appConfigInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.load();
  };
};

// Noop handler for factory function
export function noop() {
  return () => {};
}

/** @dynamic */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    MatSnackBarModule,
    NgxPageScrollCoreModule.forRoot({ _logLevel: 3 }),
    NavigatorModule.forRoot(defaultMenu),
    // NOTE: NGXS: If you have feature modules they need to be imported after the root module.
    NgxsModule.forRoot([MenuState, PreferenceState, ProfileState, AppState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      // FIXME:  https://github.com/ngxs/store/issues/902
      key: ['preference', 'app.installed', 'auth.isLoggedIn'],
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsWebsocketPluginModule.forRoot({
      url: environment.WS_EVENT_BUS_URL,
    }),
    NgxsRouterPluginModule.forRoot(),
    AuthModule.forRoot(),
    // OidcModule.forRoot({
    //   providerConfig: { ...environment.auth, provider: OidcProvider.Keycloak },
    //   initConfig: {
    //     onLoad: OidcOnLoad.CheckSso,
    //     flow: OidcFlow.Standard,
    //   },
    //   resourceInterceptorConfig: {
    //     allowedUrls: [environment.API_BASE_URL, environment.DOCS_BASE_URL],
    //   },
    //   postLoginRedirectUri: environment.baseUrl + 'dashboard',
    //   postLogoutRedirectUri: environment.baseUrl + 'home',
    // }),
    FormlyModule.forRoot(),
    environment.plugins,
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
      useFactory: appConfigInitializerFn,
      deps: [AppConfigService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [EventBusHandler, RouteHandler],
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
    library: FaIconLibrary,
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    // HINT: AppHandler is injected here to initialize it as Module Run Block,
    // APP_INITIALIZER is not an option when target to es2015
    // https://github.com/ngxs/store/issues/773
    appHandler: AppHandler
  ) {
    /**
     * add icons that are needed during app boot up here.
     * if more icons are needed, load them in respective modules and add FontAwesomeModule to it.
     * for convenience, we also added FontAwesomeModule to SharedModule.
     */
    library.addIcons(faTwitter, faGithub, faGoogle);

    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
