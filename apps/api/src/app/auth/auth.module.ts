import { forwardRef, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtStrategy } from './passport/jwt.strategy';
import { AuthGuard } from './guards/auth.guard';
import { AllowGuard } from './guards/allow.guard';
import { RoleGuard } from './guards/role.guard';
import { ComposeGuard } from './guards/compose.guard';
import { WsAuthGuard } from './guards/ws-auth.guard';
import { WsJwtStrategy } from './passport/ws-jwt.strategy';
import { UserModule } from '../user';

@Module({
  imports: [UserModule],
  providers: [
    JwtStrategy,
    WsJwtStrategy,
    AllowGuard,
    AuthGuard,
    RoleGuard,
    WsAuthGuard,
    // {
    //   provide: APP_GUARD,
    //   useClass: AllowGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard('jwt'),
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
    {
      provide: APP_GUARD,
      useClass: ComposeGuard,
    },
  ],
  exports: [AuthGuard, WsAuthGuard],
})
export class AuthModule {}
