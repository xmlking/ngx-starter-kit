import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { CoreModule } from './core';
import { AuthModule } from './auth';
import { UserModule } from './user';
// import { AccountModule } from './account';
// import { ChatModule } from './chat';
import { AppController } from './app.controller';
import { NotificationsModule } from './notifications';
import { PushModule } from './push';

@Module({
  imports: [
    RouterModule.forRoutes([
      {
        path: '/api',
        children: [
          { path: '/auth', module: AuthModule },
          { path: '/user', module: UserModule },
          { path: '/push', module: PushModule },
          // { path: '/account', module: AccountModule },
          { path: '/notifications', module: NotificationsModule },
        ],
      },
    ]),
    CoreModule,
    AuthModule,
    UserModule,
    // AccountModule,
    NotificationsModule,
    PushModule,
    // ChatModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
