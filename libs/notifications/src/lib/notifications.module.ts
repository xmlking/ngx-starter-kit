import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications.component';
import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '@ngx-starter-kit/shared';
import { DateFnsModule } from '@ngx-starter-kit/ngx-utils';
import { NotificationsState } from './notifications.state';
import { NotificationsHandler } from './notifications.handler';

@NgModule({
  imports: [SharedModule, DateFnsModule, NgxsModule.forFeature([NotificationsState])],
  declarations: [NotificationsComponent],
  exports: [NotificationsComponent],
})
export class NotificationsModule {
  // HINT: NotificationsHandler is injected here to initialize it as Module Run Block
  constructor(notificationsHandler: NotificationsHandler) {}
}
