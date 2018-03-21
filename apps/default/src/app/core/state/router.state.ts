import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { State, Action, Store, StateContext, NgxsModule } from 'ngxs';

export class UpdateRouterModel {
  constructor(public readonly payload: RouterModel) {}
}

export interface RouterModel {
  data: any;
  path: string;
}

@State<RouterModel>({
  name: 'router',
  defaults: {
    data: {},
    path: window.location.pathname + window.location.search
  }
})
export class RouterState {
  constructor(private store: Store, private _router: Router, private activatedRoute: ActivatedRoute) {
    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
      )
      .subscribe((event: any) => {
        const { data, path } = event.routeConfig;

        this.store.dispatch(new UpdateRouterModel({ data, path }));
      });
  }

  @Action(UpdateRouterModel)
  update({ getState, setState }: StateContext<RouterModel>, { payload }: UpdateRouterModel) {
    setState({
      ...payload
    });
  }
}
