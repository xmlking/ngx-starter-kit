import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { passportJwtSecret, SigningKeyNotFoundError } from '@xmlking/jwks-rsa';

import { AuthService } from '../auth.service';
import { JwtToken } from '../interfaces/jwt-token.interface';
import { WsException } from '@nestjs/websockets';
import { environment as env } from '@env-api/environment';

const extractJwtFromWsQuery = req => {
  let token = null;
  if (req.handshake.query && req.handshake.query.token) {
    {
      token = req.handshake.query.token;
    }
    return token;
  }
};

@Injectable()
export class WsJwtStrategy extends PassportStrategy(Strategy, 'ws-jwt') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: extractJwtFromWsQuery, // ExtractJwt.fromUrlQueryParameter('token'),
      // secretOrKey: env.auth.publicKey,
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        strictSsl: false,
        jwksUri: `${env.auth.issuer}/protocol/openid-connect/certs`,
      }),
      handleSigningKeyError: (err, cb) => {
        if (err instanceof SigningKeyNotFoundError) {
          return cb(new WsException('This is bad: SigningKeyNotFoundError'));
        }
        return cb(err);
      },

      // Validate the audience and the issuer.
      audience: env.auth.clientId,
      issuer: env.auth.issuer,
      algorithm: ['RS256'],
    });
  }

  // tslint:disable-next-line:ban-types
  async validate(token: any, done: Function) {
    const user = await this.authService.getLoggedUserOrCreate(token).catch(console.error);
    if (!user) {
      return done(new WsException('user not found and cannot create new user in database'), false);
    }
    token = token as JwtToken;
    done(null, user, { token });
  }
}
