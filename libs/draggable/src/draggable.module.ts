import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './directives/draggable/draggable.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DraggableDirective],
  exports: [DraggableDirective]
})
export class DraggableModule {}
