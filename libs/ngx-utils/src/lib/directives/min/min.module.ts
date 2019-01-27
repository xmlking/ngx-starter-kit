import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinValidatorDirective } from './min-validator.directive';

@NgModule({
  declarations: [MinValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [MinValidatorDirective]
})
export class MinModule { }
