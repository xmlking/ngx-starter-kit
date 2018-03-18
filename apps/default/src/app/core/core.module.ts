import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';
import { PageTitleService } from './services/page-title/page-title.service';
import { ServiceWorkerService } from './services/service-worker/service-worker.service';
import { NgxsModule, ReduxDevtoolsPluginModule } from 'ngxs';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AuthModule, AuthState } from '@nx-starter-kit/auth';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPageScrollModule,
    NgxsModule.forRoot([AuthState]),
    ReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production // Set to true for prod mode
    }),
    AuthModule.forRoot(),
    environment.envName === 'mock'
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          passThruUnknownUrl: true
          // delay: 500,
          // apiBase: 'api'
        })
      : []
  ],
  providers: [PageTitleService, ServiceWorkerService]
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
