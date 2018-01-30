import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//TODO https://github.com/AngularFirebase/78-hammerjs-angular-animations/blob/master/src/app/app.module.ts
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
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
        { path: 'admin', loadChildren: '@nx-starter-kit/admin#AdminModule' },
        { path: 'page-not-found', loadChildren: '@nx-starter-kit/page-not-found#PageNotFoundModule' },
        // 404 should be last
        { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
      ],
      {
        initialNavigation: 'enabled'
        // paramsInheritanceStrategy: 'always',
        // onSameUrlNavigation: 'reload'
      }
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
