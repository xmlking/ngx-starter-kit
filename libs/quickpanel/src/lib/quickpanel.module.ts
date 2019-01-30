import { NgModule } from '@angular/core';
import { QuickpanelComponent } from './quickpanel.component';
import { CommonModule } from '@angular/common';
import { MatListModule, MatProgressBarModule, MatSidenavModule, MatTabsModule } from '@angular/material';
import { SharedFlexLayoutModule, SharedPerfectScrollbarModule } from '@ngx-starter-kit/shared';

const matModules = [MatListModule, MatProgressBarModule, MatSidenavModule, MatTabsModule];

@NgModule({
  imports: [
    CommonModule,
    [...matModules],
    SharedFlexLayoutModule,
    SharedPerfectScrollbarModule
  ],
  exports: [QuickpanelComponent],
  declarations: [QuickpanelComponent],
})
export class QuickpanelModule {}
