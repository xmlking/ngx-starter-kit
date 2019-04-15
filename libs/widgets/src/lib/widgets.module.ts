import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ngx-starter-kit/shared';
import { ScrollbarModule } from '@ngx-starter-kit/scrollbar';
import { LoadingOverlayModule } from '@ngx-starter-kit/loading-overlay';

import {
  ChartWidget,
  ChartWidgetContent,
  ChartWidgetHeader,
  ChartWidgetHeaderActions,
  ChartWidgetHeaderSubTitle,
  ChartWidgetHeaderTitle,
} from './components/chart-widget/chart-widget.component';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardHeaderActions,
  CardHeaderSubTitle,
  CardHeaderTitle,
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
  SalesSummaryWidgetComponent,
} from './components';

import { WizdashComponent } from './containers/wizdash/wizdash.component';
import { WizdashService } from './containers/wizdash/wizdash.service';
import { ListComponent } from './components/list/list.component';
import { AspectRatioContentDirective } from './components/aspect-ratio/aspect-ratio-content.directive';
import { AspectRatioDirective } from './components/aspect-ratio/aspect-ratio.directive';
import { PageDirective } from './components/page/page.directive';
import { PagePaddingDirective } from './components/page/page-padding.directive';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

const matModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule
];

const chartWidgetComponents = [
  ChartWidget,
  ChartWidgetHeader,
  ChartWidgetHeaderTitle,
  ChartWidgetHeaderSubTitle,
  ChartWidgetHeaderActions,
  ChartWidgetContent,
];

const cardComponents = [
  Card,
  CardHeader,
  CardHeaderTitle,
  CardHeaderSubTitle,
  CardHeaderActions,
  CardContent,
  CardActions,
];

const pageComponents = [PageDirective, PagePaddingDirective];

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
    [...matModules],
    LoadingOverlayModule,
    ScrollbarModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: WizdashComponent,
        data: { animation: 'wizdash' },
      },
    ]),
  ],
  declarations: [
    ListComponent,
    AspectRatioDirective,
    AspectRatioContentDirective,
    ...pageComponents,
    ...cardComponents,
    ...chartWidgetComponents,
    ...WIDGETS,
    WizdashComponent,
  ],
  providers: [WizdashService],
})
export class WidgetsModule {}
