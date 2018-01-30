import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@nx-starter-kit/shared';
import { ThemePickerModule } from '@nx-starter-kit/theme-picker';
import { ExperimentsComponent } from './containers/experiments/experiments.component';
import { HammerCardComponent } from './components/hammer-card/hammer-card.component';
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { HammertimeDirective } from './components/hammertime/hammertime.directive';

import { Hammer } from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // override hammerjs default configuration
    swipe: { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  imports: [
    SharedModule,
    ThemePickerModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: AdminLayoutComponent,
        data: { animation: 'admin' },
        children: [
          {
            path: '',
            component: ExperimentsComponent,
            data: { animation: 'experiments' }
          }
        ]
      }
    ])
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  declarations: [ExperimentsComponent, HammerCardComponent, AdminLayoutComponent, HammertimeDirective]
})
export class AdminModule {}
