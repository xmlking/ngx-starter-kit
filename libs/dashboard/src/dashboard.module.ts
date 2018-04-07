import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@nx-starter-kit/shared';

import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { RainbowComponent } from './components/rainbow/rainbow.component';
import { QuickpanelModule } from '@nx-starter-kit/quickpanel';
import { ToolbarModule } from '@nx-starter-kit/toolbar';
import { SidenavModule } from '@nx-starter-kit/sidenav';
import { LoadingOverlayModule } from '@nx-starter-kit/loading-overlay';
import { AuthGuard } from '@nx-starter-kit/auth';

@NgModule({
  imports: [
    SharedModule,
    SidenavModule,
    ToolbarModule,
    QuickpanelModule,
    LoadingOverlayModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: DashboardLayoutComponent,
        canActivate: [AuthGuard],
        data: { animation: 'dashboard' },
        children: [
          {
            path: 'overview',
            component: OverviewComponent,
            data: { animation: 'overview' }
          },
          {
            path: '',
            loadChildren: '@nx-starter-kit/widgets#WidgetsModule',
            data: { animation: 'overview' }
          },
          {
            path: 'crud',
            loadChildren: '@nx-starter-kit/crud#CrudModule',
            data: { animation: 'crud' }
          },
          {
            path: 'experiments',
            loadChildren: '@nx-starter-kit/experiments#ExperimentsModule',
            data: { animation: 'experiments' }
          }
        ]
      }
    ])
  ],
  declarations: [DashboardLayoutComponent, OverviewComponent, RainbowComponent]
})
export class DashboardModule {}
