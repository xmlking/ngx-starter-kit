import { Params, RouterStateSnapshot } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';

export interface RouterStateParams {
  url: string;
  params: Params;
  queryParams: Params;
}

// Map the router snapshot to { url, params, queryParams }
export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateParams> {
  serialize(routerState: RouterStateSnapshot): RouterStateParams {
    const {
      url,
      root: { queryParams },
    } = routerState;
    let { root: route } = routerState;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const { params } = route;
    return { url, params, queryParams };
  }
}
