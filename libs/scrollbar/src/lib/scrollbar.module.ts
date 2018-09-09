import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollbarComponent } from './scrollbar.component';
import { ScrollbarDirective } from './scrollbar.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ScrollbarComponent, ScrollbarDirective],
  exports: [ScrollbarComponent, ScrollbarDirective],
})
export class ScrollbarModule {}
