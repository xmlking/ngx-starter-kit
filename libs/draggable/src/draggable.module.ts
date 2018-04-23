import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './directives/draggable/draggable.directive';
import { ResizableComponent } from './directives/resizable/resizable.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DraggableDirective, ResizableComponent],
  exports: [DraggableDirective, ResizableComponent]
})
export class DraggableModule {}
