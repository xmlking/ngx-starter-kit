import { Action, State, StateContext } from 'ngxs';
import {
  Login,
  LoginCanceled,
  AuthMode,
  ChangeAuthMode,
  LogoutSuccess,
  LoginSuccess,
  Logout,
  AuthModeChanged
} from './auth.actions';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { authConfigImplicit, authConfigPassword } from './oauth.config';
import { OAuthService } from 'angular-oauth2-oidc';

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
    authMode: AuthMode.ImplicitFLow
  }
})
export class AuthState {
  constructor(private authService: AuthService, private oauthService: OAuthService, private router: Router) {}

  @Action(LoginSuccess)
  loginSuccess({ getState, patchState }: StateContext<AuthStateModel>, { payload }: LoginSuccess) {
    patchState({
      isLoggedIn: true,
      profile: payload,
    });
    this.authService.startAutoRefreshToken();
  }

  @Action([LogoutSuccess, LoginCanceled])
  logoutSuccess({ getState, setState }: StateContext<AuthStateModel>) {
    setState({
      isLoggedIn: false,
      profile: {},
      authMode: getState().authMode
    });
    this.authService.stopAutoRefreshToken();
    this.router.navigate(['/home']);
  }

  @Action(AuthModeChanged)
  authModeChanged({ getState, patchState }: StateContext<AuthStateModel>, { payload }: AuthModeChanged) {
    patchState({
      authMode: payload
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
      return dispatch(new AuthModeChanged(payload));
    }
  }

  @Action(Logout)
  logout({ getState }: StateContext<AuthStateModel>) {
    return this.authService.logout();
  }

  @Action(Login)
  login({ getState }: StateContext<AuthStateModel>, { payload }: Login) {
    return this.authService.login(payload);
  }
}
