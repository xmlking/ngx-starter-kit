import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppConfirmModule } from '@ngx-starter-kit/app-confirm';
import { AdminGuard } from '@ngx-starter-kit/auth';
import { BreadcrumbsModule } from '@ngx-starter-kit/breadcrumbs';
import { HelperModule, TruncateModule } from '@ngx-starter-kit/ngx-utils';
import { QuickpanelModule } from '@ngx-starter-kit/quickpanel';
import { SharedModule } from '@ngx-starter-kit/shared';
import { ToolbarModule } from '@ngx-starter-kit/toolbar';
import { NotificationDetailComponent } from './components/notification-detail/notification-detail.component';
import { NotificationEditComponent } from './components/notification-edit/notification-edit.component';
import { SubscriptionDetailComponent } from './components/subscription-detail/subscription-detail.component';
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { NotificationsComponent } from './containers/notifications/notifications.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { SubscriptionsComponent } from './containers/subscriptions/subscriptions.component';

const matModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule,
  MatSidenavModule,
  DragDropModule,
];

@NgModule({
  imports: [
    SharedModule,
    BreadcrumbsModule,
    [...matModules],
    AppConfirmModule,
    TruncateModule,
    HelperModule,
    ToolbarModule,
    QuickpanelModule,
    FormlyModule.forChild({}),
    FormlyMaterialModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: AdminLayoutComponent,
        // canActivate: [AuthGuard],
        canActivate: [AdminGuard],
        data: { title: 'Admin', depth: 1, roles: ['ROLE_ADMIN'] },
        children: [
          { path: '', component: OverviewComponent, data: { title: 'Overview', depth: 2 } },
          {
            path: 'subscriptions',
            component: SubscriptionsComponent,
            data: { title: 'Subscriptions', depth: 3 },
            children: [
              {
                path: ':id',
                component: SubscriptionDetailComponent,
                data: { title: 'Subscription Detail' },
              },
            ],
          },
          {
            path: 'notifications',
            component: NotificationsComponent,
            data: { title: 'Notifications', depth: 3 },
            children: [
              {
                path: ':id',
                component: NotificationDetailComponent,
                data: { title: 'Notification Detail' },
              },
            ],
          },
        ],
      },
    ]),
  ],
  declarations: [
    OverviewComponent,
    NotificationsComponent,
    SubscriptionsComponent,
    SubscriptionDetailComponent,
    NotificationDetailComponent,
    NotificationEditComponent,
    AdminLayoutComponent,
  ],
})
export class AdminModule {}
