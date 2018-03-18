import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@nx-starter-kit/shared';
import { ExperimentsComponent } from './containers/experiments/experiments.component';
import { HammerCardComponent } from './components/hammer-card/hammer-card.component';
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
      { path: '', redirectTo: 'experiments1', pathMatch: 'full', data: { animation: 'experiments' } },
      {
        path: 'experiments1',
        component: ExperimentsComponent,
        data: { animation: 'experiments1' }
      },
      {
        path: 'experiment2',
        component: ExperimentsComponent,
        data: { animation: 'experiment2' }
      },
      {
        path: 'experiment3',
        component: ExperimentsComponent,
        data: { animation: 'experiment3' }
      }
    ])
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  declarations: [ExperimentsComponent, HammerCardComponent, HammertimeDirective]
})
export class ExperimentsModule {}
