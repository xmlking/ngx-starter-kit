import { NgModule } from '@angular/core';
import { QuickpanelComponent } from './quickpanel.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@ngx-starter-kit/material';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTabsModule
} from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {ScrollbarModule} from "@ngx-starter-kit/scrollbar";

@NgModule({
  imports: [
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatTabsModule,
    MaterialModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    ScrollbarModule,
    CommonModule
  ],
  exports: [QuickpanelComponent],
  declarations: [QuickpanelComponent]
})
export class QuickpanelModule {}
