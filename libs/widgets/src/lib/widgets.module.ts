import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ngx-starter-kit/shared';
import {ScrollbarModule} from "@ngx-starter-kit/scrollbar";
import {LoadingOverlayModule} from "@ngx-starter-kit/loading-overlay";

import {
  ChartWidget,
  ChartWidgetContent,
  ChartWidgetHeader,
  ChartWidgetHeaderActions,
  ChartWidgetHeaderSubTitle,
  ChartWidgetHeaderTitle
} from './components/chart-widget/chart-widget.component';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardHeaderActions,
  CardHeaderSubTitle,
  CardHeaderTitle
} from './components/card/card.component';

import {
  AdvancedPieChartWidgetComponent,
  AudienceOverviewWidgetComponent,
  BarChartWidgetComponent,
  DonutChartWidgetComponent,
  LineChartWidgetComponent,
  MarketWidgetComponent,
  QuickInfoWidgetComponent,
  RealtimeUsersWidgetComponent,
  RecentSalesWidgetComponent,
  RecentSalesWidgetTableComponent,
  SalesSummaryWidgetComponent
} from "./components"

import { WizdashComponent } from './containers/wizdash/wizdash.component';
import {WizdashService} from "./containers/wizdash/wizdash.service";
import {ListComponent} from "./components/list/list.component";
import {AspectRatioContentDirective} from "./components/aspect-ratio/aspect-ratio-content.directive";
import {AspectRatioDirective} from "./components/aspect-ratio/aspect-ratio.directive";
import {PageDirective} from "./components/page/page.directive";
import {PagePaddingDirective} from "./components/page/page-padding.directive";

const chartWidgetComponents = [
  ChartWidget,
  ChartWidgetHeader,
  ChartWidgetHeaderTitle,
  ChartWidgetHeaderSubTitle,
  ChartWidgetHeaderActions,
  ChartWidgetContent
];

const cardComponents = [
  Card,
  CardHeader,
  CardHeaderTitle,
  CardHeaderSubTitle,
  CardHeaderActions,
  CardContent,
  CardActions
];

const pageComponents = [
  PageDirective,
  PagePaddingDirective
];

const WIDGETS = [
  AdvancedPieChartWidgetComponent,
  AudienceOverviewWidgetComponent,
  BarChartWidgetComponent,
  DonutChartWidgetComponent,
  LineChartWidgetComponent,
  MarketWidgetComponent,
  QuickInfoWidgetComponent,
  RealtimeUsersWidgetComponent,
  RecentSalesWidgetComponent,
  RecentSalesWidgetTableComponent,
  SalesSummaryWidgetComponent,
];

@NgModule({
  imports: [
    SharedModule,
    LoadingOverlayModule,
    ScrollbarModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: WizdashComponent,
        data: { animation: 'wizdash' }
      }
    ])
  ],
  declarations: [
    ListComponent, AspectRatioDirective, AspectRatioContentDirective,...pageComponents,
    ...cardComponents, ...chartWidgetComponents, ...WIDGETS, WizdashComponent],
  providers: [WizdashService]
})
export class WidgetsModule {}
