import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@nx-starter-kit/shared';

import { WizdashComponent } from './containers/wizdash/wizdash.component';
import {
  WidgetComponent,
  LineChartWidgetComponent,
  SourceOverviewWidgetComponent,
  BarChartComponent,
  LineChartComponent,
  RecentSalesComponent,
  PieChartComponent,
  ActivityComponent,
  TrafficSourcesComponent,
  NvD3Component
} from './components';
import { D3ChartService } from './components';
import { environment } from '@env/environment';
import { LoadingOverlayModule } from '@nx-starter-kit/loading-overlay';

const WIDGETS = [
  WidgetComponent,
  LineChartWidgetComponent,
  SourceOverviewWidgetComponent,
  BarChartComponent,
  LineChartComponent,
  RecentSalesComponent,
  PieChartComponent,
  ActivityComponent,
  TrafficSourcesComponent,
  NvD3Component
];

@NgModule({
  imports: [
    SharedModule,
    LoadingOverlayModule,
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
