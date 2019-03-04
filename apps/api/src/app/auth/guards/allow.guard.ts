import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AllowEnum } from '../decorators';
import { ConfigService } from '../../config';

@Injectable()
export class AllowGuard implements CanActivate {
  constructor(private reflector: Reflector, private config: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const endpointAllow =
      this.reflector.get<string[]>('allow', context.getHandler()) ||
      this.reflector.get<string[]>('allow', context.getClass());

    if (endpointAllow) {
      // skip for public
      if (endpointAllow.length === 0 || endpointAllow.includes(AllowEnum.PUBLIC)) {
        return true;
      }
      // skip for known hosts
      const request = context.switchToHttp().getRequest();
      if (endpointAllow.includes(AllowEnum.WHITELIST)) {
        if (this.config.getAllowWhitelist().includes(request.connection.remoteAddress)) {
          return true;
        }
      }
    }
  }
}
