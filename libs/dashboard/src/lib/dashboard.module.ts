import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '@ngx-starter-kit/auth';
import { ChatBoxModule } from '@ngx-starter-kit/chat-box';
import { SharedModule } from '@ngx-starter-kit/shared';
import { BreadcrumbsModule } from '@ngx-starter-kit/breadcrumbs';

import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { SettingsComponent } from './containers/settings/settings.component';
import { RainbowComponent } from './components/rainbow/rainbow.component';
import { QuickpanelModule } from '@ngx-starter-kit/quickpanel';
import { ToolbarModule } from '@ngx-starter-kit/toolbar';
import { SidenavModule } from '@ngx-starter-kit/sidenav';
import { environment } from '@env/environment';
import { ProfileComponent } from './containers/profile/profile.component';

import {
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
} from '@angular/material';


const matModules = [
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatRadioModule,
  MatSlideToggleModule,
];

@NgModule({
  imports: [
    SharedModule,
    BreadcrumbsModule,
    [...matModules],
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
        data: { title: 'Dashboard', depth: 1 },
        children: [
          {
            path: '',
            component: OverviewComponent,
            data: { title: 'Overview' },
          },
          {
            path: 'profile',
            component: ProfileComponent,
            data: { title: 'Settings', depth: '2' },
          },
          {
            path: 'settings',
            component: SettingsComponent,
            data: { title: 'Settings', depth: '2' },
          },
          {
            path: 'grid',
            loadChildren: '@ngx-starter-kit/grid#GridModule',
            data: { title: 'Grid', depth: 2, preload: false },
          },
          {
            path: 'experiments',
            loadChildren: '@ngx-starter-kit/experiments#ExperimentsModule',
            data: { title: 'Experiments', depth: 2, preload: false },
          },
          {
            path: 'widgets',
            loadChildren: '@ngx-starter-kit/widgets#WidgetsModule',
            data: { title: 'Widgets', depth: '2', preload: false },
          },
        ],
      },
    ]),
  ],
  declarations: [DashboardLayoutComponent, OverviewComponent, RainbowComponent, ProfileComponent, SettingsComponent],
})
export class DashboardModule {}
