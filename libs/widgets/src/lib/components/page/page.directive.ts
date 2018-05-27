import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[ngxPage]',
  // host: { 'class': 'fury-page' }
})
export class PageDirective {
  @HostBinding('class') classes = 'ngx-page';
  constructor() {
  }

}
