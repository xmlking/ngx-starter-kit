import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DeferLoadDirective} from './defer-load.directive';
@NgModule({
  imports: [CommonModule],
  declarations: [DeferLoadDirective],
  exports: [DeferLoadDirective]
})
export class DeferLoadModule { }
