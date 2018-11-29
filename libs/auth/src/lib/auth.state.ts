import { NgZone } from '@angular/core';
import { Action, Select, Selector, State, StateContext } from '@ngxs/store';
import {
  Login,
  LoginCanceled,
  AuthMode,
  ChangeAuthMode,
  LogoutSuccess,
  LoginSuccess,
  Logout,
  AuthModeChanged,
} from './auth.actions';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { authConfigImplicit, authConfigPassword } from './oauth.config';
import { OAuthService } from 'angular-oauth2-oidc';
import { map } from 'rxjs/operators';

export interface AuthStateModel {
  isLoggedIn: boolean;
  profile: any;
  authMode: AuthMode;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isLoggedIn: false,
    profile: {},
    authMode: AuthMode.ImplicitFLow,
  },
})
export class AuthState {
  constructor(
    private authService: AuthService,
    private oauthService: OAuthService,
    private router: Router,
    private zone: NgZone,
  ) {}

  @Selector()
  static isLoggedIn(state: AuthStateModel) {
    return state.isLoggedIn;
  }

  @Selector()
  static profile(state: AuthStateModel) {
    return state.profile;
  }

  @Selector()
  static authMode(state: AuthStateModel) {
    return state ? state.authMode : AuthMode.ImplicitFLow;
  }

  @Action(LoginSuccess)
  loginSuccess({ getState, patchState }: StateContext<AuthStateModel>, { payload }: LoginSuccess) {
    patchState({
      isLoggedIn: true,
      profile: payload,
    });
    this.authService.startAutoRefreshToken();
    if (getState().authMode === AuthMode.PasswordFlow) {
      this.zone.run(() => this.router.navigate(['/dashboard']));
    }
  }

  @Action([LogoutSuccess, LoginCanceled])
  logoutSuccess({ getState, setState }: StateContext<AuthStateModel>) {
    setState({
      isLoggedIn: false,
      profile: {},
      authMode: getState().authMode,
    });
    this.authService.stopAutoRefreshToken();
    this.zone.run(() => this.router.navigate(['/home']));
  }

  @Action(AuthModeChanged)
  authModeChanged({ getState, patchState }: StateContext<AuthStateModel>, { payload }: AuthModeChanged) {
    patchState({
      authMode: payload,
    });
  }

  @Action(ChangeAuthMode)
  async changeAuthMode({ getState, dispatch }: StateContext<AuthStateModel>, { payload }: ChangeAuthMode) {
    if (getState().authMode !== payload) {
      switch (payload) {
        case AuthMode.PasswordFlow:
          this.oauthService.configure(authConfigPassword);
          break;
        default:
          this.oauthService.configure(authConfigImplicit);
          break;
      }
      await this.oauthService.loadDiscoveryDocument();
      dispatch(new AuthModeChanged(payload));
    }
  }

  @Action(Logout)
  logout({ getState }: StateContext<AuthStateModel>) {
    return this.authService.logout();
  }

  @Action(Login)
  login({ getState, dispatch }: StateContext<AuthStateModel>, { payload }: Login) {
    return this.authService.login(payload).pipe(
      map(profile => {
        if (profile === false) {
          dispatch(new LoginCanceled());
        } else {
          dispatch(new LoginSuccess(profile));
        }
      }),
    );
  }
}
