import { Directive, ElementRef, OnDestroy, OnInit, Optional } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { LinkHandlerService } from './link-handler.service';

@Directive({
  selector: '[routerLink]',
})
export class LinkDirective implements OnInit, OnDestroy {
  private routerLink: RouterLink | RouterLinkWithHref;

  constructor(
    private linkHandler: LinkHandlerService,
    private el: ElementRef,
    @Optional() link: RouterLink,
    @Optional() linkWithHref: RouterLinkWithHref,
  ) {
    this.routerLink = link || linkWithHref;
  }

  ngOnInit() {
    this.linkHandler.register(this);
  }

  ngOnDestroy() {
    this.linkHandler.unregister(this);
  }

  get element(): Element {
    return this.el.nativeElement;
  }

  get urlTree() {
    return this.routerLink.urlTree;
  }
}
