import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgViewerComponent } from './svg-viewer.component';

@NgModule({
  imports: [CommonModule],
  exports: [SvgViewerComponent],
  declarations: [SvgViewerComponent]
})
export class SvgViewerModule {}
