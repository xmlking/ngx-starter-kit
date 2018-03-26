import { Router, NavigationEnd, ActivatedRoute, NavigationExtras } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { State, Action, Store, StateContext, NgxsModule } from '@ngxs/store';

//------ router model -------
export interface RouterStateModel {
  path: string;
  data?: any;
}

//---- router actions ------
export class UpdateRouterState {
  constructor(public readonly payload: RouterStateModel) {}
}

export class Go {
  constructor(public readonly payload: { path: any[]; query?: object; extras?: NavigationExtras }) {}
}

export class Back {}
export class Forward {}

@State<RouterStateModel>({
  name: 'router',
  defaults: {
    data: {},
    path: window.location.pathname + window.location.search
  }
})
export class RouterState {
  constructor(private store: Store, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
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

        this.store.dispatch(new UpdateRouterState({ data, path }));
      });
  }

  @Action(UpdateRouterState)
  update({ getState, setState }: StateContext<RouterStateModel>, { payload }: UpdateRouterState) {
    setState({
      ...payload
    });
  }

  @Action(Go)
  go(sc: StateContext<RouterStateModel>, { payload }: Go) {
    const { path, query: queryParams, extras } = payload;
    return this.router.navigate(path, { queryParams, ...extras });
  }

  @Action(Back)
  back() {
    console.log('TODO: back');
    // this.location.back();
  }

  @Action(Forward)
  forward() {
    console.log('TODO: forward');
    // this.location.forward();
  }
}
