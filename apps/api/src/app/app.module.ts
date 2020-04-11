import { Module, HttpModule } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { CoreModule } from './core';
import { AuthModule } from './auth';
import { UserModule } from './user';
// import { AccountModule } from './account';
// import { ChatModule } from './chat';
import { AppController } from './app.controller';
import { NotificationsModule } from './notifications';
import { ExternalModule } from './external';
import { CacheModule } from './cache';
import { ProjectModule } from './project';
import { TerminusModule } from '@nestjs/terminus';
import { AppService } from './app.service';
import { HealthController } from './health.controller';

@Module({
  imports: [
    RouterModule.forRoutes([
      {
        path: '/api',
        children: [
          { path: '/auth', module: AuthModule },
          { path: '/user', module: UserModule },
          // { path: '/account', module: AccountModule },
          { path: '/', module: ProjectModule },
          { path: '/', module: NotificationsModule },
        ],
      },
      { path: '/external', module: ExternalModule },
    ]),
    HttpModule,
    CoreModule,
    CacheModule,
    AuthModule,
    UserModule,
    // AccountModule,
    // ChatModule,
    ExternalModule,
    NotificationsModule,
    ProjectModule,
    TerminusModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
