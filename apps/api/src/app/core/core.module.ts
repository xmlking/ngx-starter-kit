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
import { isClass } from '@ngx-starter-kit/utils';

function requireAllClasses(rc) {
  return rc
    .keys()
    .filter(filePath => !filePath.includes('base'))
    .flatMap(key => Object.values(rc(key)))
    .filter(isClass);
}

const requireContext = (require as any).context('../..', true, /\.entity.ts/);
// const requireContext = (require as any).context('../..', true, /^\.\/.*\/.*\/(?!(base|audit-base)).*\.entity.ts$/);
const entities = requireAllClasses(requireContext);

@Module({
  imports: [
    ConfigModule,
    EmailModule.forRoot(env.email),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) =>
        ({
          ...env.database,
          entities,
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
