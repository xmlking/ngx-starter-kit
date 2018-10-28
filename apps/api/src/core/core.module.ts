import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EmailModule } from '../email';
import { ConfigModule } from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor, TransformInterceptor } from './interceptors';
import { RequestContextMiddleware } from './context';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmailModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 25,
        secure: process.env.EMAIL_SECURE ? JSON.parse(process.env.EMAIL_SECURE) : false,
      },
      defaults: {
        from: process.env.EMAIL_FROM,
      },
      templateDir: process.env.EMAIL_TEMPLATE_DIR,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      database: process.env.TYPEORM_DATABASE,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      entities: [process.env.TYPEORM_ENTITIES],
      keepConnectionAlive: true,
      logging: process.env.TYPEORM_LOGGING ? JSON.parse(process.env.TYPEORM_LOGGING) : false,
      synchronize: process.env.TYPEORM_SYNCHRONIZE ? JSON.parse(process.env.TYPEORM_SYNCHRONIZE) : false,
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
