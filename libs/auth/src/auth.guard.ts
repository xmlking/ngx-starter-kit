import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";
import {Ngxs} from "ngxs";
import {Login} from "./auth.events";

function waitUntil(condition, timeout = 2000) {
  return new Promise(function(resolve, reject) {
    setTimeout(_ => reject(), timeout);

    function loop(){
      if(condition()){
        resolve();
      }
      setTimeout(loop,0);
    }

    setTimeout(loop,0);
  })
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private ngxs: Ngxs) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    if (this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
      return true;
    }
    else {
      await waitUntil(_ => (<any>window).loginTryed === true);

      if( this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
        return true;
      } else {
        this.ngxs.dispatch(new Login({infoMsg: "Please login to Enter"}));
        return false;
      }
    }
  }

}
