import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesEnum } from '../decorators';

const username = 'username';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const methodEndpointRoles = this.reflector.get<string[]>('roles', context.getHandler()) || [];
    const classEndpointRoles = this.reflector.get<string[]>('roles', context.getClass()) || [];
    const endpointRoles = [...methodEndpointRoles, ...classEndpointRoles];

    if (!endpointRoles || endpointRoles.length === 0) {
      return true;
    }

    const httpContext = context.switchToHttp();
    const [request, response] = [httpContext.getRequest(), httpContext.getResponse()];

    const token = request.authInfo.token;
    const userRoles = token.realm_access.roles;
    if (!token || !userRoles) {
      throw new UnauthorizedException('RoleGuard should have been executed after AuthGuard');
    }

    // FIXME: useless
    if (endpointRoles.includes(RolesEnum.SELF)) {
      if (token.preferred_username === this.resolveUsername(request)) {
        return true;
      } else {
        throw new ForbiddenException(`SELF use only`);
      }
    }

    if (endpointRoles.includes(RolesEnum.ADMIN)) {
      if (this.isRoleOverlay(token.realm_access.roles, [RolesEnum.ADMIN])) {
        return true;
      } else {
        throw new ForbiddenException(`NgxWeb admin users only`);
      }
    }

    if (endpointRoles.includes(RolesEnum.USER)) {
      if (this.isRoleOverlay(token.realm_access.roles, [RolesEnum.USER])) {
        return true;
      } else {
        throw new ForbiddenException(`NgxWeb users only`);
      }
    }

    if (this.isRoleOverlay(userRoles, endpointRoles)) {
      return true;
    } else {
      throw new ForbiddenException(`${endpointRoles} roles only allowed`);
    }
  }

  private isRoleOverlay(userRoles, authRoles) {
    return authRoles.every(val => userRoles.includes(val));
  }

  private resolveUsername(request: any) {
    if (request.method === 'GET' || request.method === 'DELETE') {
      return request.params[username] || request.query[username];
    }

    if (request.method === 'POST' || request.method === 'PATCH' || request.method === 'PUT') {
      return request.params[username] || request.body[username];
    }
    return null;
  }
}
