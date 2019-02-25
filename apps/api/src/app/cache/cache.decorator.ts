import { CacheService } from './cache.service';
import { CacheManagerOptions, InternalServerErrorException } from '@nestjs/common';
import 'reflect-metadata';
import { tap, switchMap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

type Cacheable<T> = (...args) => Observable<T>;

export function Cache<T>(options?: CacheManagerOptions) {
  return (target: any, methodName: string, descriptor: TypedPropertyDescriptor<Cacheable<T>>) => {
    const originalMethod = descriptor.value;
    const className = target.constructor.name;
    // const returnType = Reflect.getMetadata('design:returntype', target, methodName);
    // if (!returnType || returnType.name !== 'Observable') {
    //   throw new InternalServerErrorException('Target Method should return Observable');
    // }

    // @ts-ignore
    descriptor.value = function(...args: any[]) {
      const cache = this.cacheService;
      if (!cache || !(cache instanceof CacheService)) {
        // TODO: Can we do design time check if CacheService injected?
        throw new InternalServerErrorException('Target Class should inject CacheService');
      } else {
        const cacheKey = `${className}:${methodName}:${args.map(a => JSON.stringify(a)).join()}`;

        return from(cache.get<T>(cacheKey)).pipe(
          switchMap(res =>
            res
              ? of(res)
              : originalMethod
                  .apply(this, args)
                  .pipe(tap((methodResult: T) => cache.set<T>(cacheKey, methodResult, options))),
          ),
        );
      }
    };

    return descriptor;
  };
}

export function CacheBuster<T>(cacheKey: string) {
  return (target: any, methodName: string, descriptor: TypedPropertyDescriptor<Cacheable<T>>) => {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      return originalMethod.apply(this, args).pipe(tap(this.cacheService.del(cacheKey)));
    };
    return descriptor;
  };
}
