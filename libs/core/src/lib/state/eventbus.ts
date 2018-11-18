import { Actions, ofActionErrored, ofActionSuccessful, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Login, LoginSuccess } from '@ngx-starter-kit/auth';
import {
  AuthenticateWebSocket,
  ConnectWebSocket,
  DisconnectWebSocket,
  WebSocketConnected,
  WebSocketDisconnected,
} from '@ngx-starter-kit/socketio-plugin';
import { RouterNavigation, RouterState } from '@ngxs/router-plugin';
import { RouterStateData } from '@ngx-starter-kit/core';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { PageTitleService } from '../services/page-title.service';
import { GoogleAnalyticsService } from '../services/google-analytics.service';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EventBus {
  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
    private analytics: GoogleAnalyticsService,
    private pageTitle: PageTitleService,
  ) {
    this.actions$.pipe(ofActionSuccessful(Login)).subscribe(action => console.log('Login........Action Successful'));
    this.actions$.pipe(ofActionErrored(Login)).subscribe(action => console.log('Login........Action Errored'));
    this.actions$
      .pipe(ofActionSuccessful(LoginSuccess))
      .subscribe((action: LoginSuccess) => {
        this.analytics.setUsername(action.payload.preferred_username);
      });

    this.actions$
      .pipe(ofActionSuccessful(ConnectWebSocket))
      .subscribe(action => console.log('ConnectWebSocket........Action Successful'));
    this.actions$
      .pipe(ofActionSuccessful(DisconnectWebSocket))
      .subscribe(action => console.log('DisconnectWebSocket........Action Successful'));
    this.actions$.pipe(ofActionSuccessful(WebSocketConnected)).subscribe(action => {
      console.log('WebSocketConnected........Action Successful');
      this.store.dispatch(new AuthenticateWebSocket());
    });
    this.actions$
      .pipe(ofActionSuccessful(WebSocketDisconnected))
      .subscribe(action => console.log('WebSocketDisconnected........Action Successful'));

    // FIXME : https://github.com/ngxs/store/issues/542
    // this.actions$
    //   .pipe(
    //     ofActionSuccessful(RouterNavigation),
    //     map((action: RouterNavigation) => action.routerState as any),
    //     distinctUntilChanged((previous: RouterStateData, current: RouterStateData) => {
    //       return previous.url === current.url;
    //     }),
    //   )
    //   .subscribe(data => {
    //     this.pageTitle.setTitle(data.breadcrumbs);
    //     this.analytics.setPage(data.url);
    //   });

    // WORKAROUND
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        distinctUntilChanged((previous: any, current: RouterEvent) => {
          return previous.url === current.url;
        }),
      )
      .subscribe((event: NavigationEnd) => {
        const data = this.store.selectSnapshot<RouterStateData>(RouterState.state);
        this.pageTitle.setTitle(data.breadcrumbs);
        this.analytics.setPage(data.url);
      });

  }
}
