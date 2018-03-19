import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//TODO https://github.com/AngularFirebase/78-hammerjs-angular-animations/blob/master/src/app/app.module.ts
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '@env/environment';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: '@nx-starter-kit/home#HomeModule' },
        { path: 'dashboard', loadChildren: '@nx-starter-kit/dashboard#DashboardModule' },
        { path: 'admin', loadChildren: '@nx-starter-kit/admin#AdminModule' },
        { path: '404', loadChildren: '@nx-starter-kit/not-found#NotFoundModule' },
        // 404 should be last
        { path: '**', redirectTo: '404', pathMatch: 'full' }
      ],
      {
        initialNavigation: 'enabled',
        paramsInheritanceStrategy: 'always'
        // onSameUrlNavigation: 'reload'
      }
    ),
    CoreModule, // IMP: Please keep CoreModule after RouterModule
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
