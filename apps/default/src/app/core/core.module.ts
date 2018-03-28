import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';
import { PageTitleService } from './services/page-title/page-title.service';
import { ServiceWorkerService } from './services/service-worker/service-worker.service';
import { MediaQueryService } from './services/mediareplay/media-replay.service';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AuthModule, AuthState } from '@nx-starter-kit/auth';
import { NavigatorModule, MenuState } from '@nx-starter-kit/navigator';
import { RouterState } from './state/router.state';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { EventBus } from './state/eventbus';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPageScrollModule,
    NgxsModule.forRoot([AuthState, RouterState, MenuState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production // Set to true for prod mode
    }),
    AuthModule.forRoot(),
    NavigatorModule,
    environment.envName === 'mock'
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          passThruUnknownUrl: true
          // delay: 500,
          // apiBase: 'api'
        })
      : []
  ],
  providers: [
    PageTitleService,
    MediaQueryService,
    ServiceWorkerService,
    EventBus,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
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
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
