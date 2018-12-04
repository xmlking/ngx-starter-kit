import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { CoreModule } from './core';
import { AuthModule } from './auth';
import { UserModule } from './user';
// import { AccountModule } from './account';
// import { ChatModule } from './chat';
import { AppController } from './app.controller';
import { NotificationsModule } from './notifications';
import { ExternalModule } from './external';

@Module({
  imports: [
    RouterModule.forRoutes([
      {
        path: '/api',
        children: [
          { path: '/auth', module: AuthModule },
          { path: '/user', module: UserModule },
          // { path: '/account', module: AccountModule },
          { path: '/', module: NotificationsModule },
        ],
      },
      { path: '/external', module: ExternalModule },
    ]),
    CoreModule,
    AuthModule,
    UserModule,
    // AccountModule,
    // ChatModule,
    ExternalModule,
    NotificationsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
