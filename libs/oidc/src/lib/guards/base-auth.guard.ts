import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export abstract class BaseAuthGuard implements CanActivate {
  protected authenticated: boolean;
  protected roles: string[];

  protected constructor(protected router: Router, protected authService: AuthService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    try {
      this.authenticated = await this.authService.isLoggedIn();
      this.roles = await this.authService.getUserRoles(true);

      return await this.isAccessAllowed(route, state);
    } catch (error) {
      throw new Error('An error happened during access validation. Details:' + error);
    }
  }

  abstract isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree>;
}
