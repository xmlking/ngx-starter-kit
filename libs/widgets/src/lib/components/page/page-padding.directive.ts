import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngxPagePadding]',
  // host: { 'class': 'ngx-page-padding' }
})
export class PagePaddingDirective {
  @HostBinding('class')
  classes = 'ngx-page-padding';
  constructor() {}
}
