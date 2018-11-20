import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { GroupByPipe } from './group-by.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FilterPipe, GroupByPipe, SafeHtmlPipe],
  exports: [FilterPipe, GroupByPipe, SafeHtmlPipe],
})
export class HelperModule {}
