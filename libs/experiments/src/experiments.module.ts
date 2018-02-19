import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@nx-starter-kit/shared';
import { ExperimentsComponent } from './containers/experiments/experiments.component';
import { HammerCardComponent } from './components/hammer-card/hammer-card.component';
import { ExperimentsLayoutComponent } from './containers/experiments-layout/experiments-layout.component';
import { HammertimeDirective } from './components/hammertime/hammertime.directive';

import * as Hammer from 'hammerjs';

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
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: ExperimentsLayoutComponent,
        data: {},
        children: [
          {
            path: '',
            component: ExperimentsComponent,
            data: { animation: 'experiments' }
          },
          {
            path: 'experiment1',
            component: ExperimentsComponent,
            data: { animation: 'experiment1' }
          },
          {
            path: 'experiment2',
            component: ExperimentsComponent,
            data: { animation: 'experiment2' }
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
  declarations: [ExperimentsComponent, HammerCardComponent, ExperimentsLayoutComponent, HammertimeDirective]
})
export class ExperimentsModule {}
