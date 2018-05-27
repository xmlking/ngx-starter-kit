import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenComponent } from './fullscreen.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@nx-starter-kit/material';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [FullscreenComponent],
  declarations: [FullscreenComponent]
})
export class FullscreenModule {}
