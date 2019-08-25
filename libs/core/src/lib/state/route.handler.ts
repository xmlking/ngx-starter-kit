import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { RouterNavigation, RouterState } from '@ngxs/router-plugin';
import { PageTitleService } from '../services/page-title.service';
import { GoogleAnalyticsService } from '../services/google-analytics.service';
import { RouterStateData } from './custom-router-state.serializer';

@Injectable({
  providedIn: 'root',
})
export class RouteHandler {
  constructor(
    private router: Router,
    private actions$: Actions,
    private analytics: GoogleAnalyticsService,
    private pageTitle: PageTitleService,
  ) {
    this.actions$
      .pipe(
        ofActionSuccessful(RouterNavigation),
        map((action: RouterNavigation) => action.routerState as any),
        distinctUntilChanged((previous: RouterStateData, current: RouterStateData) => {
          return previous.url === current.url;
        }),
      )
      .subscribe(data => {
        this.pageTitle.setTitle(data.breadcrumbs);
        this.analytics.setPage(data.url);
      });
  }
}
