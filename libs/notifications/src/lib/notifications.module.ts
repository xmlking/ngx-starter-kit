import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications.component';
import { NgxsModule } from '@ngxs/store';

import { SharedFlexLayoutModule, SharedPerfectScrollbarModule } from '@ngx-starter-kit/shared';
import { ClickOutsideModule, DateFnsModule, NgLetModule } from '@ngx-starter-kit/ngx-utils';

import { NotificationsState } from './notifications.state';
import { NotificationsHandler } from './notifications.handler';
import { CommonModule } from '@angular/common';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const matModules = [MatButtonModule, MatIconModule, MatBadgeModule];

@NgModule({
  imports: [
    CommonModule,
    [...matModules],
    NgLetModule,
    DateFnsModule,
    ClickOutsideModule,
    SharedPerfectScrollbarModule,
    SharedFlexLayoutModule,
    NgxsModule.forFeature([NotificationsState]),
  ],
  declarations: [NotificationsComponent],
  exports: [NotificationsComponent],
})
export class NotificationsModule {
  // HINT: NotificationsHandler is injected here to initialize it as Module Run Block
  constructor(notificationsHandler: NotificationsHandler) {}
}
