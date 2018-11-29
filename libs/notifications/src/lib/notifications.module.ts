import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications.component';
import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '@ngx-starter-kit/shared';
import { NotificationsState } from './notifications.state';

@NgModule({
  imports: [SharedModule, NgxsModule.forFeature([NotificationsState])],
  declarations: [NotificationsComponent],
  exports: [NotificationsComponent],
})
export class NotificationsModule {}
