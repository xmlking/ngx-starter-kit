import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'home', loadChildren: '@nx-starter-kit/home#HomeModule' },
        { path: 'dashboard', loadChildren: '@nx-starter-kit/dashboard#DashboardModule' }
      ],
      {
        initialNavigation: 'enabled'
      }
    ),
    CoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
