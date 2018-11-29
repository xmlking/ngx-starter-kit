import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkMatchDirective } from './router-link-match.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [RouterLinkMatchDirective],
  exports: [RouterLinkMatchDirective],
})
export class RouterLinkMatchModule {}
