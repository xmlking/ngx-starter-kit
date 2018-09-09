import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngxPage]',
})
export class PageDirective {
  @HostBinding('class')
  classes = 'ngx-page';
  constructor() {}
}
