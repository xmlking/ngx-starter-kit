import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollbarComponent } from './scrollbar.component';
import { ScrollbarDirective } from './scrollbar.directive';

// FIXME: https://github.com/idiotWu/smooth-scrollbar/pull/234
@NgModule({
  imports: [CommonModule],
  declarations: [ScrollbarComponent, ScrollbarDirective],
  exports: [ScrollbarComponent, ScrollbarDirective],
})
export class ScrollbarModule {}
