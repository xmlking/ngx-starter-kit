import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ngxClickOutside]',
})
export class ClickOutsideDirective {
  @Output()
  public ngxClickOutside = new EventEmitter<MouseEvent>();

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.ngxClickOutside.emit(event);
    }
  }
}
