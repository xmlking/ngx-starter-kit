import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AllowGuard } from './allow.guard';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';

@Injectable()
export class ComposeGuard implements CanActivate {
  constructor(private allowGuard: AllowGuard, private authGuard: AuthGuard, private roleGuard: RoleGuard) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    return (
      (await this.allowGuard.canActivate(context)) ||
      ((await this.authGuard.canActivate(context)) && (await this.roleGuard.canActivate(context)))
    );
  }
}
