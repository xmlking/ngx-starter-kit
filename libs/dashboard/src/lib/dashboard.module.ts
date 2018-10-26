import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ngx-starter-kit/shared';

import { AuthGuard } from '@ngx-starter-kit/auth';
import { ChatBoxModule } from '@ngx-starter-kit/chat-box';

import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { RainbowComponent } from './components/rainbow/rainbow.component';
import { QuickpanelModule } from '@ngx-starter-kit/quickpanel';
import { ToolbarModule } from '@ngx-starter-kit/toolbar';
import { SidenavModule } from '@ngx-starter-kit/sidenav';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    SharedModule,
    SidenavModule,
    ToolbarModule,
    QuickpanelModule,
    // FIXME: AOT not working with environment.xyz
    ChatBoxModule.forRoot({
      accessToken: '37808bf14a19406cbe2a50cfd1332dd3', // environment.dialogFlow.apiToken
    }),
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: DashboardLayoutComponent,
        canActivate: [AuthGuard],
        data: { title: 'Dashboard', animation: 'dashboard' },
        children: [
          {
            path: 'overview',
            component: OverviewComponent,
            data: { animation: 'overview' },
          },
          {
            path: '',
            loadChildren: '@ngx-starter-kit/widgets#WidgetsModule',
            data: { title: 'Widgets', animation: 'overview', preload: true },
          },
          {
            path: 'grid',
            loadChildren: '@ngx-starter-kit/grid#GridModule',
            data: { title: 'Grid', animation: 'grid', preload: true },
          },
          {
            path: 'experiments',
            loadChildren: '@ngx-starter-kit/experiments#ExperimentsModule',
            data: { title: 'Experiments', animation: 'experiments' },
          },
        ],
      },
    ]),
  ],
  declarations: [DashboardLayoutComponent, OverviewComponent, RainbowComponent],
})
export class DashboardModule {}
