import { Params, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { RouterStateSerializer } from '@ngxs/router-plugin';
import { Injectable } from '@angular/core';

export interface RouterStateData {
  url: string;
  params: Params;
  queryParams: Params;
  breadcrumbs: Map<string, string>;
  data: any;
}

// Map the router snapshot to { url, params, queryParams, titleSet }
@Injectable()
export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateData> {
  serialize(routerState: RouterStateSnapshot): RouterStateData {
    const {
      url,
      root: { queryParams },
    } = routerState;
    let { root: route } = routerState;

    const breadcrumbs = new Map();
    while (route.firstChild) {
      route = route.firstChild;
      if (route.data.title) {
        breadcrumbs.set(route.data.title, route.pathFromRoot.flatMap(segment => segment.url).join('/'));
      }
    }
    const { params } = route;
    const { data } = route;
    return { url, params, queryParams, breadcrumbs, data };
  }
}
