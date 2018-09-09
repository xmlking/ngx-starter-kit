import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedComponent } from './led.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LedComponent],
  exports: [LedComponent],
})
export class LedModule {}
