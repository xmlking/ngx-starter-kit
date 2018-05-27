import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker.component';
import { StyleManagerService } from './style-manager.service';
import { ThemeStorageService } from './theme-storage.service';
import { MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatGridListModule, MatTooltipModule, CommonModule],
  exports: [ThemePickerComponent],
  declarations: [ThemePickerComponent],
  providers: [StyleManagerService, ThemeStorageService]
})
export class ThemePickerModule {}
