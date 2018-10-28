import { AfterViewInit, Directive, ElementRef, HostBinding, Input, NgZone, OnDestroy } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { untilDestroy } from '@ngx-starter-kit/ngx-utils';

@Directive({
  selector: '[draggable]',
})
export class DraggableDirective implements AfterViewInit, OnDestroy {
  @HostBinding('style.cursor')
  cursor = 'move';
  @Input()
  dragHandle: string;
  @Input()
  dragTarget: string;

  // Element to be dragged
  private target: HTMLElement;
  // Drag handle
  private handle: HTMLElement;
  private delta = { x: 0, y: 0 };
  private offset = { x: 0, y: 0 };

  constructor(private elementRef: ElementRef, private zone: NgZone) {}

  public ngAfterViewInit(): void {
    this.handle = this.dragHandle
      ? (document.querySelector(this.dragHandle) as HTMLElement)
      : this.elementRef.nativeElement;
    this.target = document.querySelector(this.dragTarget) as HTMLElement;
    this.setupEvents();
  }

  ngOnDestroy() {}

  private setupEvents() {
    this.zone.runOutsideAngular(() => {
      const mouseEvents = (e: MouseEvent) => {
        e.preventDefault();
        return {
          x: e.clientX,
          y: e.clientY,
        };
      };

      const touchEvents = (e: TouchEvent) => {
        return {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY,
        };
      };

      const mousedown$ = fromEvent(this.handle, 'mousedown').pipe(map(mouseEvents));
      const mousemove$ = fromEvent(document, 'mousemove').pipe(map(mouseEvents));
      const mouseup$ = fromEvent(document, 'mouseup').pipe(map(mouseEvents));

      const touchstart$ = fromEvent(this.handle, 'touchstart').pipe(map(touchEvents));
      const touchmove$ = fromEvent(document, 'touchmove').pipe(map(touchEvents));
      const touchend$ = fromEvent(document, 'touchend').pipe(map(touchEvents));

      const start$ = merge(mousedown$, touchstart$);
      const move$ = merge(mousemove$, touchmove$);
      const end$ = merge(mouseup$, touchend$);

      const drag$ = start$.pipe(
        switchMap(start => {
          const startX = start.x;
          const startY = start.y;

          return move$.pipe(
            map(move => {
              this.delta = {
                x: move.x - startX,
                y: move.y - startY,
              };
            }),
            takeUntil(end$),
          );
        }),
        untilDestroy(this),
      );

      drag$.subscribe(() => {
        if (this.delta.x === 0 && this.delta.y === 0) {
          return;
        }

        this.translate();
      });

      end$.pipe(untilDestroy(this)).subscribe(() => {
        this.offset.x += this.delta.x;
        this.offset.y += this.delta.y;
        this.delta = { x: 0, y: 0 };
      });
    });
  }

  private translate() {
    requestAnimationFrame(() => {
      this.target.style.transform = `
        translate(${this.offset.x + this.delta.x}px,
                  ${this.offset.y + this.delta.y}px)
      `;
    });
  }
}
