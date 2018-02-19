import { Directive, HostBinding, HostListener, Inject, OnInit, OnDestroy } from '@angular/core';
import { SidenavItem } from './components/sidenav-item/sidenav-item.model';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
// import {NavigationService} from "./services/navigation/navigation.service";
import { SidenavService } from './sidenav.service';

@Directive({
  selector: '[sumoIconSidenav]'
})
export class IconSidenavDirective implements OnInit, OnDestroy {
  private _mediaSubscription: Subscription;
  isMobile = false;

  @HostBinding('class.icon-sidenav')
  get isIconSidenav(): boolean {
    return this.navigationService.isIconSidenav;
  }

  @HostBinding('class.collapsed') collapsed: boolean;

  currentlyOpen: SidenavItem[];

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.isIconSidenav && !this.isMobile) {
      this.collapsed = false;

      this.navigationService.nextCurrentlyOpen(this.currentlyOpen);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isIconSidenav && !this.isMobile) {
      this.collapsed = true;

      this.currentlyOpen = this.navigationService.currentlyOpen;
      this.navigationService.nextCurrentlyOpen([]);
    }
  }

  constructor(private navigationService: SidenavService, private media: ObservableMedia) {}

  ngOnInit() {
    this._mediaSubscription = this.media.subscribe((change: MediaChange) => {
      this.isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';
    });
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
  }
}
