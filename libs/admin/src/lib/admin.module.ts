import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ngx-starter-kit/shared';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppConfirmModule } from '@ngx-starter-kit/app-confirm';
import { HelperModule, TruncateModule } from '@ngx-starter-kit/ngx-utils';
import { OverviewComponent } from './containers/overview/overview.component';
import { SubscriptionsComponent } from './containers/subscriptions/subscriptions.component';
import { SubscriptionDetailComponent } from './components/subscription-detail/subscription-detail.component';
import { NotificationsComponent } from './containers/notifications/notifications.component';
import { NotificationDetailComponent } from './components/notification-detail/notification-detail.component';
import { NotificationEditComponent } from './components/notification-edit/notification-edit.component';
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { ToolbarModule } from '@ngx-starter-kit/toolbar';
import { QuickpanelModule } from '@ngx-starter-kit/quickpanel';
import { AdminGuard } from '@ngx-starter-kit/auth';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  imports: [
    SharedModule,
    DragDropModule,
    AppConfirmModule,
    TruncateModule,
    HelperModule,
    ToolbarModule,
    QuickpanelModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AdminGuard],
        data: { title: 'Admin', depth: 1 },
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
  entryComponents: [NotificationEditComponent],
})
export class AdminModule {}
