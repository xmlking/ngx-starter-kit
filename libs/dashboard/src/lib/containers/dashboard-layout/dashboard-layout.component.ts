import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  OnDestroy,
  HostBinding
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Router, NavigationEnd } from '@angular/router';
import { routeAnimation } from '@ngx-starter-kit/animations';

@Component({
  selector: 'ngx-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  animations: [routeAnimation]
  // encapsulation: ViewEncapsulation.None
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav;

  private _mediaSubscription: Subscription;
  private _routerEventsSubscription: Subscription;

  quickpanelOpen = false;
  sidenavOpen = true;
  sidenavMode = 'side';
  isMobile = false;

  constructor(private router: Router, private media: ObservableMedia) {}

  ngOnInit() {
    this._mediaSubscription = this.media.subscribe((change: MediaChange) => {
      const isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';

      this.isMobile = isMobile;
      this.sidenavMode = isMobile ? 'over' : 'side';
      this.sidenavOpen = !isMobile;
    });

    this._routerEventsSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.isMobile) {
        this.sidenav.close();
      }
    });

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 2000);
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData['animation'] || 'one';
    //return outlet.isActivated ? outlet.activatedRoute : ''
  }
}
