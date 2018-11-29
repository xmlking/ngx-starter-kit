import { Actions, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { RouterState } from '@ngxs/router-plugin';
import { PageTitleService } from '../services/page-title.service';
import { GoogleAnalyticsService } from '../services/google-analytics.service';

@Injectable({
  providedIn: 'root',
})
export class RouteHandler {
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store,
    private analytics: GoogleAnalyticsService,
    private pageTitle: PageTitleService,
  ) {
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
        const data = this.store.selectSnapshot<any>(RouterState.state);
        this.pageTitle.setTitle(data.breadcrumbs);
        this.analytics.setPage(data.url);
      });
  }
}
