import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker.component';
import { ThemePickerServiceModule } from './theme-picker-service.module';
import { MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatTooltipModule,
    ThemePickerServiceModule,
  ],
  exports: [ThemePickerComponent],
  declarations: [ThemePickerComponent],
})
export class ThemePickerModule {}
