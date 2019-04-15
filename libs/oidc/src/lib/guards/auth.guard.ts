import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '@env/environment';
import { BaseAuthGuard } from './base-auth.guard';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard extends BaseAuthGuard {
  constructor(private snack: MatSnackBar, protected router: Router, protected authService: AuthService) {
    super(router, authService);
  }
  // TODO: UrlTree https://juristr.com/blog/2018/11/better-route-guard-redirects/ remember previous tried URL
  async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (!this.authenticated) {
      await this.authService.login({ redirectUri: environment.baseUrl.slice(0, -1) + state.url }); // Let Provider add baseUrl?
      return;
    }

    const requiredRoles = route.data.roles;
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    } else {
      if (!this.roles || this.roles.length === 0) {
        return false;
      }
      let granted = false;
      for (const requiredRole of requiredRoles) {
        if (this.roles.indexOf(requiredRole) > -1) {
          granted = true;
          break;
        }
      }
      if (!granted) {
        this.snack.open('You are not Admin. Please login with ngxadmin : ngxadmin', 'OK', { duration: 5000 });
      }
      return granted;
    }
  }
}
