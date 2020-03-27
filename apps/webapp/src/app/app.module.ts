import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { CoreModule } from '@ngx-starter-kit/core';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'home',
          loadChildren: () => import('@ngx-starter-kit/home').then((module) => module.HomeModule),
          data: { preload: true },
        },
        {
          path: 'dashboard',
          loadChildren: () => import('@ngx-starter-kit/dashboard').then((module) => module.DashboardModule),
          data: { preload: true },
        },
        {
          path: 'admin',
          loadChildren: () => import('@ngx-starter-kit/admin').then((module) => module.AdminModule),
          data: { preload: false },
        },
        {
          path: '404',
          loadChildren: () => import('@ngx-starter-kit/not-found').then((module) => module.NotFoundModule),
          data: { title: '404', preload: false },
        },
        // 404 should be last
        { path: '**', redirectTo: '404', pathMatch: 'full' },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        preloadingStrategy: QuicklinkStrategy,
        paramsInheritanceStrategy: 'always',
        // enableTracing: true, // enable to debug routing during development
        // onSameUrlNavigation: 'reload'
      }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CoreModule, // IMP: Please keep CoreModule after RouterModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
