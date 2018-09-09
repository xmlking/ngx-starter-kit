import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import * as passport from 'passport';
import { WsAuthException } from '../auth.exception';

export const defaultWsOptions = {
  session: false,
  property: 'user',
  infoProperty: 'authInfo',
  callback: (err, user, info) => {
    if (err || !user) {
      // When Error occur, info is the error.
      throw new WsAuthException(info.message, info.name);
    }
    return { user, info };
  },
};

@Injectable()
export class WsAuthGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const httpContext = context.switchToWs();
    const request = httpContext.getClient();

    const passportFn = createPassportContext(request, {});
    try {
      const userAndInfo = await passportFn('ws-jwt', defaultWsOptions);
      request[defaultWsOptions.property] = (userAndInfo as any).user;
      request[defaultWsOptions.infoProperty] = (userAndInfo as any).info;
      return true;
    } catch (err) {
      request.disconnect();
      throw err;
    }
  }
}

const createPassportContext = (request, response) => (type, options) =>
  new Promise((resolve, reject) =>
    passport.authenticate(type, options, (err, user, info) => {
      try {
        return resolve(options.callback(err, user, info));
      } catch (err) {
        reject(err);
      }
    })(request, response, resolve),
  );
