import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EmailModule } from '../email';
import { ConfigModule } from '../config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor, TransformInterceptor } from './interceptors';
import { RequestContextMiddleware } from './context';
import { ConfigService } from '../config';
import { environment as env } from '@env-api/environment';

// FIXME: temp workaround https://github.com/nrwl/nx/pull/1233
// import { isClass } from '@ngx-starter-kit/utils';
export function isClass(obj) {
  return !!obj.prototype && !!obj.prototype.constructor.name;
}

function requireAllClasses(rc) {
  return rc
    .keys()
    .flatMap(key => Object.values(rc(key)))
    .filter(isClass);
}

const requireContext = (require as any).context('../..', true, /\.entity.ts/);
const entities = requireAllClasses(requireContext);

// const migrationsRequireContext = (require as any).context('../../../migrations/', true, /\.ts/);
// const migrations = requireAllClasses(migrationsRequireContext);

@Module({
  imports: [
    ConfigModule,
    EmailModule.forRoot(env.email),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService): TypeOrmModuleOptions => ({
        ...env.database,
        entities,
        // migrations,
      }),
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
