import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Login, LoginCanceled, LoginSuccess, Logout, LogoutSuccess } from './auth.actions';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

export interface AuthStateModel {
  isLoggedIn: boolean;
  profile: any;
}

/** @dynamic */
@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isLoggedIn: false,
    profile: {},
  },
})
export class AuthState {
  constructor(private authService: AuthService, private router: Router, private zone: NgZone) {}

  @Selector()
  static isLoggedIn(state: AuthStateModel) {
    return state.isLoggedIn;
  }

  @Selector()
  static profile(state: AuthStateModel) {
    return state.profile;
  }


  @Action(Login)
  login({ getState }: StateContext<AuthStateModel>) {
    return this.authService.login();
  }

  @Action(LoginSuccess)
  loginSuccess({ getState, patchState }: StateContext<AuthStateModel>, { payload }: LoginSuccess) {
    patchState({
      isLoggedIn: true,
      profile: payload,
    });
    // this.authService.startAutoRefreshToken();
  }

  @Action(Logout)
  logout({ getState }: StateContext<AuthStateModel>) {
    return this.authService.logout();
  }

  @Action([LogoutSuccess, LoginCanceled])
  logoutSuccess({ getState, setState }: StateContext<AuthStateModel>) {
    setState({
      isLoggedIn: false,
      profile: {},
    });
    // this.authService.stopAutoRefreshToken();
    // this.zone.run(() => this.router.navigate(['/home']));
  }

}
