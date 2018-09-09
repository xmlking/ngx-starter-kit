import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './directives/draggable/draggable.directive';
import { ResizableComponent } from './directives/resizable/resizable.component';
import { ResizableState } from './directives/resizable/resizable.state';

@NgModule({
  imports: [CommonModule],
  declarations: [DraggableDirective, ResizableComponent],
  exports: [DraggableDirective, ResizableComponent],
  providers: [ResizableState],
})
export class DraggableModule {}
