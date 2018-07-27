import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { NavigationEnd, Router } from '@angular/router';
import { routeAnimation } from '@ngx-starter-kit/animations';
import { Actions, Store } from '@ngxs/store';
import { ConnectWebSocket, DisconnectWebSocket } from '@ngx-starter-kit/socketio-plugin';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '@env/environment';

@Component({
  selector: 'ngx-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  animations: [routeAnimation],
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

  constructor(
    private router: Router,
    private store: Store,
    private actions$: Actions,
    private media: ObservableMedia,
    private oauthService: OAuthService,
  ) {}

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

    this.store.dispatch(
      new ConnectWebSocket({
        url: environment.WS_EVENT_BUS_URL,
        tokenFn: () => this.oauthService.getAccessToken(),
      }),
    );
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
    this.store.dispatch(new DisconnectWebSocket());
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData['animation'] || 'one';
    //return outlet.isActivated ? outlet.activatedRoute : ''
  }
}
