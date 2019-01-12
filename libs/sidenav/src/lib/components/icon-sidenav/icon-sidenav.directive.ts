import { Directive, HostBinding, HostListener, Inject, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MenuItem, MenuService } from '@ngx-starter-kit/navigator';
import { Store } from '@ngxs/store';

@Directive({
  selector: '[ngxIconSidenav]',
})
export class IconSidenavDirective implements OnInit, OnDestroy {
  private _mediaSubscription: Subscription;
  isMobile = false;

  @HostBinding('class.icon-sidenav')
  get isIconSidenav(): boolean {
    return this.menuService.isIconSidenav;
  }

  @HostBinding('class.collapsed')
  collapsed: boolean;

  currentlyOpen: MenuItem[];

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.isIconSidenav && !this.isMobile) {
      this.collapsed = false;

      this.menuService.currentlyOpen = this.currentlyOpen;
      // this.store.dispatch(new NextCurrentlyOpened(this.currentlyOpen));
      // this.store.dispatch(new SetIconMode(false));
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isIconSidenav && !this.isMobile) {
      this.collapsed = true;

      this.currentlyOpen = this.menuService.currentlyOpen;
      this.menuService.currentlyOpen = [];
      // this.store.dispatch(new NextCurrentlyOpened([]));
      // this.store.dispatch(new SetIconMode(true));
    }
  }

  constructor(private store: Store, private menuService: MenuService, private mediaObserver: MediaObserver) {}

  ngOnInit() {
    this._mediaSubscription = this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';
    });
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
  }
}
