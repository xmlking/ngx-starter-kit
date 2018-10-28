import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngxs/store';
import { RouterState } from '@ngxs/router-plugin';
import { RouterStateData } from '../state/custom-router-state.serializer';

declare var ga: any;
/**
 * Service responsible for setting the title that appears above the home and dashboard pages.
 */
@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private readonly defaultTitle;

  constructor(private store: Store, private bodyTitle: Title) {
    this.defaultTitle = bodyTitle.getTitle() || 'WebApp';

    // Automatically set pageTitle from router state data
    store.select<any>(RouterState.state).subscribe((routerStateData: RouterStateData) => {
      console.log(routerStateData);
      bodyTitle.setTitle(
        `${Array.from(routerStateData.breadcrumbs.keys())
          .reverse()
          .join(' | ')} | ${this.defaultTitle}`,
      );

      ga('send', 'pageview', routerStateData.url);
    });
  }
}
