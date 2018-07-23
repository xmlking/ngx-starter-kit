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
import { Store } from '@ngxs/store';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Router, NavigationEnd } from '@angular/router';
import { routeAnimation } from '@ngx-starter-kit/animations';
import { OAuthService } from 'angular-oauth2-oidc';
import { ConnectWebSocket, DisconnectWebSocket } from '@ngx-starter-kit/socketio-plugin';
import { environment } from '@env/environment';

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

  constructor(private router: Router,
              private store: Store,
              private media: ObservableMedia,
              private oauthService: OAuthService) {}

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

    const token = this.oauthService.getAccessToken();
    // TODO: Enable when running backend
    // this.store.dispatch(new ConnectWebSocket({url: environment.WS_EVENT_BUS_URL, connectOpts: {query: {token}}}));
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
    // this.store.dispatch(new DisconnectWebSocket());
  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData['animation'] || 'one';
    //return outlet.isActivated ? outlet.activatedRoute : ''
  }
}
