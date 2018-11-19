import { Actions, ofActionErrored, ofActionSuccessful, Store } from '@ngxs/store';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Login, LoginSuccess } from '@ngx-starter-kit/auth';
import {
  AuthenticateWebSocket,
  ConnectWebSocket,
  DisconnectWebSocket,
  WebSocketConnected,
  WebSocketDisconnected,
} from '@ngx-starter-kit/socketio-plugin';
import { RouterNavigation, RouterState } from '@ngxs/router-plugin';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { PageTitleService } from '../services/page-title.service';
import { EventCategory, GoogleAnalyticsService } from '../services/google-analytics.service';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { SetInstallPrompt, AppState, Online, Offline, ChangeInstallStatus } from './app.state';
import { WINDOW } from '../services/window.token';

@Injectable({
  providedIn: 'root',
})
export class EventBus {
  private renderer: Renderer2;
  constructor(
    private actions$: Actions,
    private store: Store,
    private router: Router,
    private analytics: GoogleAnalyticsService,
    private pageTitle: PageTitleService,
    private rendererFactory: RendererFactory2,
    @Inject(WINDOW) private readonly window: Window,
  ) {
    this.renderer = rendererFactory.createRenderer(this.window, null);
    this.renderer.listen(this.window, 'online', () => {
      this.store.dispatch(new Online());
    });
    this.renderer.listen(this.window, 'offline', () => {
      this.store.dispatch(new Offline());
    });

    const installed = this.store.selectSnapshot(AppState.installed);
    if (!installed) {
      this.renderer.listen(this.window, 'beforeinstallprompt', event => {
        event.preventDefault(); // Prevent default for older Chrome versions to prevent double install prompt
        this.analytics.emitEvent(EventCategory.Install, 'available');
        // this.snackBar.open('You can add this PWA to your homescreen', '', {duration: 3000});
        this.store.dispatch(new SetInstallPrompt(event));
      });
      this.renderer.listen(this.window, 'appinstalled', event => {
        event.preventDefault(); // Prevent default for older Chrome versions to prevent double install prompt
        this.analytics.emitEvent(EventCategory.Install, 'installed');
        this.store.dispatch(new ChangeInstallStatus(true));
      });

      this.actions$.pipe(ofActionSuccessful(SetInstallPrompt)).subscribe(async (action: SetInstallPrompt) => {
        try {
          console.log('platforms', action.payload.platforms);
          // TODO: const sb = this.snackBar.open('Do you want to install this app?', 'Install', {duration: 5000})
          // sb.onAction().subscribe(() => { //prompt here }
          action.payload.prompt();
          const choiceResult = await action.payload.userChoice;
          console.log('choiceResult', choiceResult);
          this.analytics.emitEvent(EventCategory.Install, choiceResult);
        } catch (installError) {
          this.analytics.emitEvent(EventCategory.Install, 'errored');
        }
      });
    }

    this.actions$.pipe(ofActionSuccessful(Login)).subscribe(action => console.log('Login........Action Successful'));
    this.actions$.pipe(ofActionErrored(Login)).subscribe(action => console.log('Login........Action Errored'));
    this.actions$.pipe(ofActionSuccessful(LoginSuccess)).subscribe((action: LoginSuccess) => {
      this.analytics.setUsername(action.payload.preferred_username);
    });

    this.actions$
      .pipe(ofActionSuccessful(ConnectWebSocket))
      .subscribe(action => console.log('ConnectWebSocket........Action Successful'));
    this.actions$
      .pipe(ofActionSuccessful(DisconnectWebSocket))
      .subscribe(action => console.log('DisconnectWebSocket........Action Successful'));
    this.actions$.pipe(ofActionSuccessful(WebSocketConnected)).subscribe(action => {
      console.log('WebSocketConnected........Action Successful');
      this.store.dispatch(new AuthenticateWebSocket());
    });
    this.actions$
      .pipe(ofActionSuccessful(WebSocketDisconnected))
      .subscribe(action => console.log('WebSocketDisconnected........Action Successful'));

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
