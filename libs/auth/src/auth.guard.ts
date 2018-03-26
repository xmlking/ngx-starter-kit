import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { Login } from './auth.actions';

function waitUntil(condition, timeout = 2000) {
  return new Promise(function(resolve, reject) {
    setTimeout(_ => reject(), timeout);

    function loop() {
      if (condition()) {
        resolve();
      }
      setTimeout(loop, 0);
    }

    setTimeout(loop, 0);
  });
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private store: Store) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
      return true;
    } else {
      await waitUntil(_ => (<any>window).loginTryed === true);

      if (this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
        return true;
      } else {
        this.store.dispatch(new Login({ infoMsg: 'Please login to Enter' }));
        return false;
      }
    }
  }
}
