import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";
import {Ngxs} from "ngxs";
import {Login} from "./auth.events";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private oauthService: OAuthService,private ngxs: Ngxs, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
      return true;
    } else {
      this.ngxs.dispatch(new Login({infoMsg: "Please login to Enter"}));
      return false;
    }
  }

}
