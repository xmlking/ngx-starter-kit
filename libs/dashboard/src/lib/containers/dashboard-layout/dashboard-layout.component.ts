import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '@env/environment';
import { hierarchicalRouteAnimation } from '@ngx-starter-kit/animations';
import { RouterStateData, WINDOW } from '@ngx-starter-kit/core';
import { ConnectWebSocket, DisconnectWebSocket } from '@ngx-starter-kit/socketio-plugin';
import { RouterState } from '@ngxs/router-plugin';
import { Actions, Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { filter, map } from 'rxjs/operators';

/** @dynamic */
@AutoUnsubscribe()
@Component({
  selector: 'ngx-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  // animations: [routeAnimation],
  animations: [hierarchicalRouteAnimation],
  // encapsulation: ViewEncapsulation.None
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', { static: true }) sidenav;
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
    this.crumbs$ = this.store
      .select<any>(RouterState.state)
      .pipe(map(state => Array.from(state.breadcrumbs, ([key, value]) => ({ name: key, link: '/' + value }))));

    this.depth$ = this.store.select<RouterStateData>(RouterState.state).pipe(map(state => state.data.depth));

    this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0]),
      )
      .subscribe((change: MediaChange) => {
        const isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';

        this.isMobile = isMobile;
        this.sidenavMode = isMobile ? 'over' : 'side';
        this.sidenavOpen = !isMobile;
      });

    this.router.events.pipe().subscribe(event => {
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
