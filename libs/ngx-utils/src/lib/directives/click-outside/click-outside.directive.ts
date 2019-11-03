import { Directive, ElementRef, EventEmitter, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective implements OnInit {
  public clickOutside = new EventEmitter<MouseEvent>();

  captured = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!this.captured) {
      return;
    }

    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.clickOutside.emit(event);
    }
  }

  ngOnInit() {
    fromEvent(document, 'click', { capture: true })
      .pipe(take(1))
      .subscribe(() => (this.captured = true));
  }
}
