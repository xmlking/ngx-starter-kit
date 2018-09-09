import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngxAspectRatioContent]',
})
export class AspectRatioContentDirective {
  @HostBinding('class.ngx-aspect-ratio-content-element')
  bodyClass = true;
  constructor() {}
}
