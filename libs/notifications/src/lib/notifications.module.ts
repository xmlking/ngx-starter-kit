import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications.component';
import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '@ngx-starter-kit/shared';
import { NotificationsState } from './notifications.state';
import { DateFnsModule } from '@ngx-starter-kit/ngx-utils';

@NgModule({
  imports: [SharedModule, DateFnsModule, NgxsModule.forFeature([NotificationsState])],
  declarations: [NotificationsComponent],
  exports: [NotificationsComponent],
})
export class NotificationsModule {}
