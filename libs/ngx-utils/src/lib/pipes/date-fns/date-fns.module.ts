import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatTimeInWordsPipe } from './format-time-in-words.pipe';

const PIPES = [FormatTimeInWordsPipe];

@NgModule({
  declarations: [PIPES],
  imports: [CommonModule],
  exports: [PIPES],
})
export class DateFnsModule {}
