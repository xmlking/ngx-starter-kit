import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[nxtkClickOutside]'
})
export class ClickOutsideDirective {
  @Output() public nxtkClickOutside = new EventEmitter<MouseEvent>();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.nxtkClickOutside.emit(event);
    }
  }
}
