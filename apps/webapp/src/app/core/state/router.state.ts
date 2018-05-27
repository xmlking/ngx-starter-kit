import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  NavigationExtras
} from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { State, Action, Store, StateContext } from '@ngxs/store';
import { combineLatest } from 'rxjs';

//------ router model -------
export interface RouterStateModel {
  path: string;
  data?: any;
  params?: any;
  queryParams?: any;
}

//---- router actions ------
export class UpdateRouterState {
  static readonly type = '[Router] UpdateRouterState';
  constructor(public readonly payload: RouterStateModel) {}
}

export class Go {
  static readonly type = '[Router] Go';
  constructor(
    public readonly payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

@State<RouterStateModel>({
  name: 'router',
  defaults: {
    path: window.location.pathname + window.location.search
  }
})
export class RouterState {
  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route: ActivatedRoute) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap(
          ({
            params,
            queryParams,
            routeConfig: { data, path }
          }: ActivatedRoute) => {
            return combineLatest(params, queryParams, function(
              _params,
              _queryParams
            ) {
              return { path, data, _params, _queryParams };
            });
          }
        )
      )
      .subscribe(all => {
        this.store.dispatch(
          new UpdateRouterState({
            path: all.path,
            data: all.data,
            params: all._params,
            queryParams: all._queryParams
          })
        );
      });
  }

  @Action(UpdateRouterState)
  update(
    { getState, setState }: StateContext<RouterStateModel>,
    { payload }: UpdateRouterState
  ) {
    setState({
      ...payload
    });
  }

  @Action(Go)
  go(sc: StateContext<RouterStateModel>, { payload }: Go) {
    const { path, query: queryParams, extras } = payload;
    return this.router.navigate(path, { queryParams, ...extras });
  }
}
