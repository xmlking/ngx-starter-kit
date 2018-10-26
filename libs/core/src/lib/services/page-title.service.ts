import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterState } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var ga: any;
/**
 * Service responsible for setting the title that appears above the home and dashboard pages.
 */
@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private readonly defaultTitle;
  public titleSet: Set<string>;

  constructor(private router: Router, private bodyTitle: Title) {
    this.defaultTitle = bodyTitle.getTitle() || 'WebApp';

    // Automatically set pageTitle from route data
    router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((n: NavigationEnd) => {
      const titleSet = new Set();
      let root = this.router.routerState.snapshot.root;
      do {
        root = root.children[0];
        if (root.data['title']) {
          titleSet.add(root.data['title']);
        }
      } while (root.children.length > 0);

      this.titleSet = titleSet;
      bodyTitle.setTitle(
        `${Array.from(titleSet)
          .reverse()
          .join(' | ')} | ${this.defaultTitle}`,
      );

      ga('send', 'pageview', n.urlAfterRedirects);
    });
  }
}
