import {Store, Action, Mutation} from 'ngxs';
import {Login, LoginCanceled, LogoutSuccess, LoginSuccess, Logout, AuthModeChanged} from './auth.events';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {ChangeAuthMode} from "./auth.events";
import {authConfigImplicit, authConfigPassword} from "./oauth.config";
import {OAuthService} from "angular-oauth2-oidc";
import {AuthMode} from "./auth.events";

@Store({
  defaults: {
    isLoggedIn: false,
    profile: {},
    authMode: AuthMode.ImplicitFLow
  }
})
export class AuthStore {

  constructor(private authService: AuthService,
              private oauthService: OAuthService,
              private router: Router) {
  }

  @Mutation(LoginSuccess)
  loginSuccess(state, {payload}) {
    state.isLoggedIn = payload.isLoggedIn;
    state.profile = payload.profile;
    this.authService.setupAutoRefreshToken();
  }

  @Mutation([LogoutSuccess, LoginCanceled])
  logoutSuccess(state, {payload}) {
    state.isLoggedIn = false;
    state.profile = {};
    this.router.navigate(['/home']);
  }

  @Mutation(AuthModeChanged)
  authModeChanged (state, {payload}) {
    state.authMode = payload;
  }

  @Action(ChangeAuthMode)
  async changeAuthMode(state, {payload}) {
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
      return new AuthModeChanged(payload);
    }
  }

  @Action(Logout)
  logout(state, {payload}) {
    return this.authService.logout();
  }

  @Action(Login)
  login(state, {payload}) {
    return this.authService.login(payload);
  }
}
