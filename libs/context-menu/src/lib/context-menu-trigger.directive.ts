import {
  Directive,
  HostListener,
  TemplateRef,
  Input,
  ViewContainerRef,
  ElementRef,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subject, fromEvent } from 'rxjs';
import { untilDestroy } from '@ngx-starter-kit/ngx-utils';

@Directive({
  selector: '[contextMenu]',
})
export class ContextMenuTriggerDirective implements OnDestroy {
  @HostBinding('style.cursor')
  cursor = 'context-menu';
  @Input()
  contextMenu: TemplateRef<any>;

  constructor(private overlay: Overlay, private elementRef: ElementRef, private vcr: ViewContainerRef) {}

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          overlayX: 'start',
          overlayY: 'top',
          originX: 'start',
          originY: 'bottom',
        },
      ]);

    const overlayRef = this.overlay.create({ positionStrategy });
    const templatePortal = new TemplatePortal(this.contextMenu, this.vcr);
    overlayRef.attach(templatePortal);

    fromEvent(document, 'click')
      /** Automatically unsubscribe on destroy */
      .pipe(untilDestroy(this))
      .subscribe(() => overlayRef.detach());
  }

  /** Must have */
  ngOnDestroy() {}
}
