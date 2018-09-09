import { AfterContentInit, Directive, ElementRef, Input, NgZone } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import { ScrollbarOptions } from 'smooth-scrollbar/interfaces';
import { scrollbarOptions } from './scrollbar-options';

@Directive({
  selector: '[ngxScrollbar]',
})
export class ScrollbarDirective implements AfterContentInit {
  @Input()
  options: Partial<ScrollbarOptions>;

  scrollbarRef: Scrollbar;

  constructor(private _element: ElementRef, private zone: NgZone) {}

  ngAfterContentInit() {
    // const options = defaultsDeep(this.options, scrollbarOptions);
    const options = Object.assign(this.options, scrollbarOptions);

    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = Scrollbar.init(this._element.nativeElement, options);
    });
  }
}
