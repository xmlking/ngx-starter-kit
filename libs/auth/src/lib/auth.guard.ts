import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { OAuthService } from '@xmlking/angular-oauth2-oidc-all';
import { Store } from '@ngxs/store';
import { Login } from './auth.actions';
// import { waitUntil } from '@ngx-starter-kit/utils';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private store: Store) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
      return true;
    } else {
      // await waitUntil(_ => (<any>window).loginTryed === true);

      if (this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
        return true;
      } else {
        this.store.dispatch(new Login({ infoMsg: 'Please login to Enter' }));
        // TODO return router.parseUrl('/notauthorized');
        return false;
      }
    }
  }
}
