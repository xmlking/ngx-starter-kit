import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskDirective } from './mask.directive';

@NgModule({
  declarations: [MaskDirective],
  imports: [
    CommonModule
  ],
  exports: [MaskDirective]
})
export class MaskModule { }
