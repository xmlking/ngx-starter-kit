import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EmailModule } from '../email';
import { ConfigModule } from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor, TransformInterceptor } from './interceptors';
import { RequestContextMiddleware } from './context';
import { ConfigService } from '../config';
import { ConnectionOptions } from 'typeorm';
import { environment as env } from '@env-api/environment';
import { User } from '../auth/user.entity';
import { Notification } from '../notifications/notification/notification.entity';
import { Subscription } from '../notifications/subscription/subscription.entity';

@Module({
  imports: [
    ConfigModule,
    EmailModule.forRoot(env.email),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) =>
        ({
          ...env.database,
          entities: [User, Notification, Subscription],
        } as ConnectionOptions),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [
    // Enable for debugging in Dev env.
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}
