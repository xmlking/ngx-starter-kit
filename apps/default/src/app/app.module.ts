import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    CoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: '@nx-starter-kit/home#HomeModule' },
        { path: 'dashboard', loadChildren: '@nx-starter-kit/dashboard#DashboardModule' },
        { path: 'page-not-found', loadChildren: '@nx-starter-kit/page-not-found#PageNotFoundModule' },
        // 404 should be last
        { path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},

      ],
      {
        initialNavigation: 'enabled'
      }
    )
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
