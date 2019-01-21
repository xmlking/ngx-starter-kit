import { NgModule } from '@angular/core';
import { LinkDirective } from './link.directive';

@NgModule({
  declarations: [LinkDirective],
  exports: [LinkDirective],
})
export class PreloadViewportModule {}
