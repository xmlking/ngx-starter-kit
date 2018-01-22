import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    environment.demo
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          passThruUnknownUrl: true
          // delay: 500,
          // apiBase: 'api'
        })
      : []
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
