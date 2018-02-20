import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@nx-starter-kit/shared';
import { AgmCoreModule } from '@agm/core';

import { WizdashComponent } from './containers/wizdash/wizdash.component';
import {
  WidgetComponent,
  LineChartWidgetComponent,
  SourceOverviewWidgetComponent,
  BarChartComponent,
  LineChartComponent,
  RecentSalesComponent,
  PieChartComponent,
  GoogleMapsWidgetComponent,
  ActivityComponent,
  TrafficSourcesComponent,
  NvD3Component
} from './components';
import { D3ChartService } from './components';
import { environment } from '../../../apps/default/src/environments/environment';
import { LoadingOverlayModule } from '@nx-starter-kit/loading-overlay';

const WIDGETS = [
  WidgetComponent,
  LineChartWidgetComponent,
  SourceOverviewWidgetComponent,
  BarChartComponent,
  LineChartComponent,
  RecentSalesComponent,
  PieChartComponent,
  GoogleMapsWidgetComponent,
  ActivityComponent,
  TrafficSourcesComponent,
  NvD3Component
];

@NgModule({
  imports: [
    SharedModule,
    LoadingOverlayModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: WizdashComponent,
        data: { animation: 'wizdash' }
      }
    ])
  ],
  declarations: [...WIDGETS, WizdashComponent],
  providers: [D3ChartService]
})
export class WidgetsModule {}
