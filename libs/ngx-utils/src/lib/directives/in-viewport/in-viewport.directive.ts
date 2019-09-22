import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { untilDestroy } from '../../operators/untilDestroy';
import { ViewportService } from './viewport.service';

@Directive({
  selector: '[inViewport]',
})
export class InViewportDirective implements OnInit, OnDestroy {
  @Input() public preRender = true;
  @Input() public oneTime = false;
  @Output() readonly inViewport = new EventEmitter<Partial<IntersectionObserverEntry>>();

  constructor(
    private readonly elementRef: ElementRef,
    private viewportService: ViewportService,
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  public ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.oneTime) {
        this.viewportService
          .observe(this.elementRef.nativeElement)
          .pipe(
            untilDestroy(this),
            filter(entry => entry.intersectionRatio >= 0.5),
            take(1),
          )
          .subscribe((entry: IntersectionObserverEntry) => {
            this.inViewport.emit(entry);
          });
      } else {
        this.viewportService
          .observe(this.elementRef.nativeElement)
          .pipe(untilDestroy(this))
          .subscribe((entry: IntersectionObserverEntry) => {
            this.inViewport.emit(entry);
          });
      }
    } else {
      if (this.preRender) {
        this.inViewport.emit({ isIntersecting: true, intersectionRatio: 1 });
      }
    }
  }

  ngOnDestroy() {}
}
