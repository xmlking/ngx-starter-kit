import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLetDirective } from './ng-let.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgLetDirective],
  exports: [NgLetDirective]
})
export class NgLetModule { }
