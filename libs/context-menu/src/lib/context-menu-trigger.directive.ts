import {
  Directive,
  HostListener,
  TemplateRef,
  Input,
  ViewContainerRef,
  ElementRef,
  OnDestroy,
  HostBinding
} from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[contextMenu]'
})
export class ContextMenuTriggerDirective implements OnDestroy {
  @HostBinding('style.cursor') cursor = 'context-menu';
  @Input() contextMenu: TemplateRef<any>;

  private _destroy$: Subject<void>;

  constructor(private _overlay: Overlay, private _elementRef: ElementRef, private _vcr: ViewContainerRef) {}

  ngOnDestroy() {
    if (this._destroy$) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef)
      .withPositions([
        {
          overlayX: 'start',
          overlayY: 'top',
          originX: 'start',
          originY: 'bottom'
        }
      ]);

    const overlayRef = this._overlay.create({ positionStrategy });
    const templatePortal = new TemplatePortal(this.contextMenu, this._vcr);
    overlayRef.attach(templatePortal);

    this._destroy$ = new Subject();

    fromEvent(document, 'click')
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => overlayRef.detach());
  }
}
