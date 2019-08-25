import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOverlayComponent } from './loading-overlay.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [MatProgressBarModule, CommonModule],
  exports: [LoadingOverlayComponent],
  declarations: [LoadingOverlayComponent],
})
export class LoadingOverlayModule {}
