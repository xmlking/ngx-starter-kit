import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OAuthService } from '@xmlking/angular-oauth2-oidc-all';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private snack: MatSnackBar, private oauthService: OAuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) && this.isAdmin()) {
      return true;
    } else {
      if ((this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) && this.isAdmin()) {
        return true;
      } else {
        this.snack.open('You are not Admin. Please login with ngxadmin : ngxadmin', 'OK', { duration: 5000 });
        return false;
      }
    }
  }

  isAdmin(): boolean {
    // const userRoles = (<any>this.oauthService.getIdentityClaims()).groups.filter(role => role.startsWith('NGX_'));
    return (this.oauthService.getIdentityClaims() as any).preferred_username === 'ngxadmin';
  }
}
