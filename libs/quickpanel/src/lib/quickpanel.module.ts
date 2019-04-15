import { NgModule } from '@angular/core';
import { QuickpanelComponent } from './quickpanel.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedFlexLayoutModule, SharedPerfectScrollbarModule } from '@ngx-starter-kit/shared';

const matModules = [MatListModule, MatProgressBarModule, MatSidenavModule, MatTabsModule];

@NgModule({
  imports: [CommonModule, [...matModules], SharedFlexLayoutModule, SharedPerfectScrollbarModule],
  exports: [QuickpanelComponent],
  declarations: [QuickpanelComponent],
})
export class QuickpanelModule {}
