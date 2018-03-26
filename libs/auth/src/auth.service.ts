import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { AuthMode, LoginCanceled, LoginSuccess, Logout, LogoutSuccess } from './auth.actions';
import { Store, Select } from '@ngxs/store';
import { ROPCService } from './ropc.service';
import { LoginComponent } from './components/login/login.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { AuthState } from './auth.state';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { OAuthEvent } from 'angular-oauth2-oidc/events';
import { AuthStateModel } from '@nx-starter-kit/auth/src/auth.state';

@Injectable()
export class AuthService {
  static loginDefaultConf = { width: '400px', disableClose: true, panelClass: 'mylogin-no-padding-dialog' };
  private _refresher: Subscription;
  private _monitorer: Subscription;
  mode: AuthMode;

  constructor(
    private store: Store,
    private httpClient: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private ropcService: ROPCService,
    private oauthService: OAuthService
  ) {
    // this.store.select((state: {foo: AuthStateModel}) => state.foo.authMode).subscribe(mode => {
    //   console.log(`Auth Mode Changed: ${this.mode} => ${mode}`);
    //   this.mode = mode;
    // });
    this.store.select(AuthState.authMode).subscribe(mode => {
      console.log(`Auth Mode Changed: ${this.mode} => ${mode}`);
      this.mode = mode;
    });
  }

  private monitorSessionActivities() {
    this._monitorer = this.oauthService.events.subscribe(e => {
      switch (e.type) {
        case 'logout':
        case 'session_terminated':
          console.log('Your session has been terminated!', e);
          this.store.dispatch(new LogoutSuccess());
          break;
        case 'token_received':
          console.log('received token_received event', e);
          //this.store.dispatch(new LoadProfile());
          //this.oauthService.loadUserProfile();
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
    if (this.mode === AuthMode.PasswordFlow) {
      // For Password Flow
      return this.ropcService.logOut();
    } else {
      // For ImplicitFlow
      this.oauthService.logOut();
    }
  }

  stopAutoRefreshToken() {
    if (this._refresher && !this._refresher.closed) this._refresher.unsubscribe();
  }

  startAutoRefreshToken() {
    if (this._refresher && !this._refresher.closed) this._refresher.unsubscribe();
    if (this._monitorer && !this._monitorer.closed) this._monitorer.unsubscribe();

    if (this.mode === AuthMode.PasswordFlow) {
      // for Password Flow
      this._refresher = this.oauthService.events
        .pipe(
          filter((e: OAuthEvent) => e.type === 'token_expires'),
          mergeMap(_ => fromPromise(this.oauthService.refreshToken())),
          catchError((error: HttpErrorResponse) => {
            console.log('Auto token refresh failed. Logging Out...', error.error);
            this.store.dispatch(new Logout());
            return throwError(error.error);
          })
        )
        .subscribe();
    } else {
      // for Implicit flow
      this.oauthService.setupAutomaticSilentRefresh();
    }

    this.monitorSessionActivities();
  }
}
