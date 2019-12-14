import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { fromEvent } from 'rxjs';

@AutoUnsubscribe()
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
      .subscribe(() => overlayRef.detach());
  }

  /** Must have */
  ngOnDestroy() {}
}
