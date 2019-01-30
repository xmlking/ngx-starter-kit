import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [FlexLayoutModule.withConfig({ useColumnBasisZero: false })],
  exports: [FlexLayoutModule],
})
export class SharedFlexLayoutModule {}
