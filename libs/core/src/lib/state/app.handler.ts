import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { EventCategory, GoogleAnalyticsService } from '../services/google-analytics.service';
import { AppState, ChangeInstallStatus, ChangeOnlineStatus, IsOffline, IsOnline, SetInstallPrompt } from './app.state';
import { WINDOW } from '../services/window.token';
import { LoginSuccess } from '@ngx-starter-kit/auth';
import { FetchProfile } from '../state/profile.state';

/** @dynamic */
@Injectable({
  providedIn: 'root',
})
export class AppHandler {
  private renderer: Renderer2;
  constructor(
    private actions$: Actions,
    private store: Store,
    private readonly swPush: SwPush,
    private analytics: GoogleAnalyticsService,
    private rendererFactory: RendererFactory2,
    @Inject(WINDOW) private readonly window: Window,
  ) {
    this.renderer = rendererFactory.createRenderer(this.window, null);
    this.renderer.listen(this.window, 'online', () => {
      this.store.dispatch([new ChangeOnlineStatus(), new IsOnline()]);
    });
    this.renderer.listen(this.window, 'offline', () => {
      this.store.dispatch([new ChangeOnlineStatus(), new IsOffline()]);
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
      this.actions$.pipe(ofActionSuccessful(LoginSuccess)).subscribe((action: LoginSuccess) => {
        this.analytics.setUsername(action.payload.preferred_username);
        console.log('setting action.payload.preferred_username', action.payload.preferred_username);
        this.store.dispatch(new FetchProfile());
      });
    }

    if (this.swPush.isEnabled) {
      // subscribe for new messages for testing
      this.swPush.messages.subscribe(message => {
        console.log('received push notification', message);
      });
    }
  }
}
