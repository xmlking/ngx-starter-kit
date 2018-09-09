import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, CommonModule],
  exports: [ScrollToTopComponent],
  declarations: [ScrollToTopComponent],
})
export class ScrollToTopModule {}
