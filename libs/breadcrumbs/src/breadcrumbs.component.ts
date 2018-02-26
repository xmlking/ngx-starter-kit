import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreadcrumbsService } from './breadcrumbs.service';
//TODO http://preview.themeforest.net/item/codex-responsive-admin-dashboard-template/full_screen_preview/19692729?_ga=2.224649502.540505891.1517685272-1559617809.1517685272
@Component({
  selector: 'nxtk-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnChanges, OnDestroy {
  @Input('prefix') prefix = '';

  urls: string[];
  private _routerSubscription: any;

  constructor(private router: Router, private breadcrumbService: BreadcrumbsService) {}

  ngOnInit(): void {
    this.urls = [];

    if (this.prefix.length > 0) {
      this.urls.unshift(this.prefix);
    }

    this._routerSubscription = this.router.events.subscribe((navigationEnd: NavigationEnd) => {
      this.urls.length = 0; // Fastest way to clear out array
      this.generateBreadcrumbTrail(
        navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url
      );
    });
  }

  ngOnChanges(): void {
    if (!this.urls) {
      return;
    }

    this.urls.length = 0;
    this.generateBreadcrumbTrail(this.router.url);
  }

  generateBreadcrumbTrail(url: string): void {
    if (!this.breadcrumbService.isRouteHidden(url)) {
      // Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
      this.urls.unshift(url);
    }

    if (url.lastIndexOf('/') > 0) {
      this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
    } else if (this.prefix.length > 0) {
      this.urls.unshift(this.prefix);
    }
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  friendlyName(url: string): string {
    return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
  }

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }
}
