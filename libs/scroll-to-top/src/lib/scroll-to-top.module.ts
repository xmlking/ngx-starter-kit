import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [ScrollToTopComponent],
  declarations: [ScrollToTopComponent],
})
export class ScrollToTopModule {}
