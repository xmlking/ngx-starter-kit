import { Injectable } from '@angular/core';
import { OAuthService } from '@xmlking/angular-oauth2-oidc-all';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, filter, mergeMap, tap } from 'rxjs/operators';
import { AuthMode, Logout, LogoutSuccess } from './auth.actions';
import { Store, Select } from '@ngxs/store';
import { ROPCService } from './ropc.service';
import { LoginComponent } from './components/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { OAuthEvent } from '@xmlking/angular-oauth2-oidc-all/events';

@Injectable()
export class AuthService {
  static loginDefaultConf = { width: '380px', disableClose: true, panelClass: 'mylogin-no-padding-dialog' };
  private refresher: Subscription;
  private monitorer: Subscription;
  @Select('auth.authMode') authMode$: Observable<AuthMode>;
  authMode: AuthMode;

  constructor(
    private store: Store,
    private httpClient: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private ropcService: ROPCService,
    private oauthService: OAuthService,
  ) {
    this.authMode$.subscribe(authMode => {
      console.log(`Auth Mode Changed: ${this.authMode} => ${authMode}`);
      this.authMode = authMode;
    });
  }

  private monitorSessionActivities() {
    this.monitorer = this.oauthService.events.subscribe(e => {
      switch (e.type) {
        case 'logout':
        case 'session_terminated':
          console.log('Your session has been terminated!', e);
          this.store.dispatch(new LogoutSuccess());
          break;
        case 'token_received':
          console.log('received token_received event', e);
          // this.store.dispatch(new LoadProfile());
          // this.oauthService.loadUserProfile();
          break;
        case 'token_expires':
          console.log('received token_expires event', e);
          break;
        case 'user_profile_loaded':
          console.log('received user_profile_loaded event', e);
          break;
        case 'session_changed':
          console.log('received session_changed event', e);
          break;
        default:
          console.log('default: session event', e);
      }
    });
  }

  login(payload?: { infoMsg?: string }) {
    const loginDialogConf = Object.is(payload, undefined)
      ? AuthService.loginDefaultConf
      : { ...AuthService.loginDefaultConf, ...{ data: payload } };
    const dialogRef = this.dialog.open(LoginComponent, loginDialogConf);
    return dialogRef.afterClosed();
  }

  logout() {
    if (this.authMode === AuthMode.PasswordFlow) {
      // For Password Flow
      return this.ropcService.logOut();
    } else {
      // For ImplicitFlow or CodeFLow or HybridFlow
      this.oauthService.logOut();
    }
  }

  stopAutoRefreshToken() {
    if (this.refresher && !this.refresher.closed) {
      this.refresher.unsubscribe();
    }
  }

  startAutoRefreshToken() {
    if (this.refresher && !this.refresher.closed) {
      this.refresher.unsubscribe();
    }
    if (this.monitorer && !this.monitorer.closed) {
      this.monitorer.unsubscribe();
    }

    if (this.authMode === AuthMode.ImplicitFLow) {
      // for Implicit flow
      this.oauthService.setupAutomaticSilentRefresh();
    } else {
      // for PasswordFlow or CodeFLow or HybridFlow
      this.refresher = this.oauthService.events
        .pipe(
          tap(e => {
            console.log(`sumo: type: $e.type, `, e);
          }),
          filter((e: OAuthEvent) => e.type === 'token_expires'),
          mergeMap(_ => fromPromise(this.oauthService.refreshToken())),
          catchError((error: HttpErrorResponse) => {
            console.log('Auto token refresh failed. Logging Out...', error.error);
            this.store.dispatch(new Logout());
            return throwError(error.error);
          }),
        )
        .subscribe();
    }

    this.monitorSessionActivities();
  }
}
