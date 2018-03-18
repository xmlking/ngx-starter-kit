import {Action, State, StateContext} from 'ngxs';
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
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {authConfigImplicit, authConfigPassword} from './oauth.config';
import {OAuthService} from 'angular-oauth2-oidc';

export interface AuthStateModel {
  isLoggedIn: boolean,
  profile: any,
  authMode: AuthMode
}

@State<AuthStateModel>({
  defaults: {
    isLoggedIn: false,
    profile: {},
    authMode: AuthMode.ImplicitFLow
  }
})
export class AuthState {
  constructor(private authService: AuthService, private oauthService: OAuthService, private router: Router) {
  }

  @Action(LoginSuccess)
  loginSuccess({state, setState}: StateContext<AuthStateModel>, { payload }: LoginSuccess) {
    setState({
      isLoggedIn: true,
      profile: payload,
      authMode: state.authMode
    });
    this.authService.startAutoRefreshToken();
  }

  @Action([LogoutSuccess, LoginCanceled])
  logoutSuccess({state, setState}: StateContext<AuthStateModel>) {
    setState({
      isLoggedIn: false,
      profile: {},
      authMode: state.authMode
    });
    this.authService.stopAutoRefreshToken();
    this.router.navigate(['/home']);
  }

  @Action(AuthModeChanged)
  authModeChanged({state, setState}: StateContext<AuthStateModel>, { payload }: AuthModeChanged) {
    setState({
      isLoggedIn: state.isLoggedIn,
      profile: state.profile,
      authMode: payload
    });
  }

  @Action(ChangeAuthMode)
  //TODO async changeAuthMode({ state, setState, dispatch }: StateContext<AuthStateModel>, { payload }: ChangeAuthMode) {
  async changeAuthMode({ state, setState, dispatch }, { payload }: ChangeAuthMode) {
    if (state.authMode !== payload) {
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
  logout({state, setState}: StateContext<AuthStateModel>) {
    return this.authService.logout();
  }

  @Action(Login)
  login({ state, setState }: StateContext<AuthStateModel>, { payload }: Login) {
    return this.authService.login(payload);
  }
}
