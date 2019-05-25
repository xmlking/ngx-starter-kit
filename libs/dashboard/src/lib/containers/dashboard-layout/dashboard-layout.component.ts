import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { NavigationEnd, Router } from '@angular/router';
import { routeAnimation, hierarchicalRouteAnimation } from '@ngx-starter-kit/animations';
import { Actions, Store } from '@ngxs/store';
import { ConnectWebSocket, DisconnectWebSocket } from '@ngx-starter-kit/socketio-plugin';
import { environment } from '@env/environment';
import { RouterState } from '@ngxs/router-plugin';
import { map } from 'rxjs/operators';
import { RouterStateData, WINDOW } from '@ngx-starter-kit/core';
import { untilDestroy } from '@ngx-starter-kit/ngx-utils';
import { OAuthService } from '@xmlking/angular-oauth2-oidc-all';
// import { AuthService } from '@ngx-starter-kit/oidc';

/** @dynamic */
@Component({
  selector: 'ngx-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  // animations: [routeAnimation],
  animations: [hierarchicalRouteAnimation],
  // encapsulation: ViewEncapsulation.None
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', {static: true}) sidenav;
  quickpanelOpen = false;
  sidenavOpen = true;
  sidenavMode = 'side';
  isMobile = false;
  crumbs$;
  depth$;

  constructor(
    private router: Router,
    private store: Store,
    private actions$: Actions,
    private mediaObserver: MediaObserver,
    private oauthService: OAuthService,
    // private authService: AuthService,
    @Inject(WINDOW) private window: Window,
  ) {}

  ngOnInit() {
    this.crumbs$ = this.store.select<any>(RouterState.state).pipe(
      untilDestroy(this),
      map(state => Array.from(state.breadcrumbs, ([key, value]) => ({ name: key, link: '/' + value }))),
    );

    this.depth$ = this.store.select<RouterStateData>(RouterState.state).pipe(map(state => state.data.depth));

    this.mediaObserver.media$.pipe(untilDestroy(this)).subscribe((change: MediaChange) => {
      const isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';

      this.isMobile = isMobile;
      this.sidenavMode = isMobile ? 'over' : 'side';
      this.sidenavOpen = !isMobile;
    });

    this.router.events.pipe(untilDestroy(this)).subscribe(event => {
      if (event instanceof NavigationEnd && this.isMobile) {
        this.sidenav.close();
      }
    });

    setTimeout(() => {
      this.window.dispatchEvent(new Event('resize'));
    }, 2000);

    // Disable WebSocket in mock mode
    if (environment.envName !== 'mock') {
      this.store.dispatch(
        new ConnectWebSocket({
          url: environment.WS_EVENT_BUS_URL,
          tokenFn: () => this.oauthService.getAccessToken(), // this.authService.getToken(),
        }),
      );
    }
  }

  ngOnDestroy() {
    this.store.dispatch(new DisconnectWebSocket());
  }
}
