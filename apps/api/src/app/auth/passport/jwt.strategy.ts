import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { passportJwtSecret, SigningKeyNotFoundError } from '@xmlking/jwks-rsa';

import { environment as env } from '@env-api/environment';
import { JwtToken } from '@ngx-starter-kit/models';
import { UserService } from '../../user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // secretOrKey: env.auth.publicKey,
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        strictSsl: false,
        jwksUri:
          env.auth.jwksUri ||
          `${env.auth.issuerInternalUrl || env.auth.issuerExternalUrl}/protocol/openid-connect/certs`,
      }),
      handleSigningKeyError: (err, cb) => {
        if (err instanceof SigningKeyNotFoundError) {
          return cb(new UnauthorizedException('This is bad: SigningKeyNotFoundError'));
        }
        return cb(err);
      },

      // Validate the audience and the issuer.
      audience: env.auth.clientId,
      issuer: env.auth.issuerExternalUrl,
      algorithm: ['RS256'],
    });
  }

  // tslint:disable-next-line:ban-types
  async validate(token: any, done: Function) {
    const user = await this.userService.getLoggedUserOrCreate(token).catch(console.error);
    if (!user) {
      return done(new UnauthorizedException('user not found and cannot create new user in database'), false);
    }
    token = token as JwtToken;
    done(null, user, { token });
  }
}
