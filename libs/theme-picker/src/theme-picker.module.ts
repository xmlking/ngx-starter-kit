import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { StyleManagerService } from './services/style-manager/style-manager.service';
import { ThemeStorageService } from './services/theme-storage/theme-storage.service';
import { MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatGridListModule, MatTooltipModule, CommonModule],
  exports: [ThemePickerComponent],
  declarations: [ThemePickerComponent],
  providers: [StyleManagerService, ThemeStorageService]
})
export class ThemePickerModule {}
