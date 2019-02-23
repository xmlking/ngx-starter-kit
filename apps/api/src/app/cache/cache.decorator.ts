import { CacheService } from './cache.service';
import { CacheManagerOptions, Injectable, InternalServerErrorException } from '@nestjs/common';
import 'reflect-metadata';
import { tap } from 'rxjs/operators';

export enum ReturnType {
  OBSERVABLE = 'Observable',
  PROMISE = 'Promise',
  SCALAR = 'Scalar',
}

export function Cache(options?: CacheManagerOptions): MethodDecorator {
  return (target: any, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor.value;
    const className = target.constructor.name;
    let returnType = ReturnType.SCALAR;
    const returnTypeRaw = Reflect.getMetadata('design:returntype', target, methodName);
    if (returnTypeRaw) {
      if (returnTypeRaw.name === ReturnType.PROMISE) {
        returnType = ReturnType.PROMISE;
      } else if (returnTypeRaw.name === ReturnType.OBSERVABLE) {
        returnType = ReturnType.OBSERVABLE;
      }
    }

    console.log('returnType ', returnType);

    if (returnType === ReturnType.PROMISE) {
      descriptor.value = async function(...args: any[]) {
        if (!this.cacheService || !(this.cacheService instanceof CacheService)) {
          throw new InternalServerErrorException('Target Class should inject CacheService');
        }

        const cacheKey = `${className}:${methodName}:${args.map(a => JSON.stringify(a)).join()}`;

        const entry = await this.cacheService.get(cacheKey);
        if (entry) {
          return entry;
        }

        const result = await originalMethod.apply(this, args);
        await this.cacheService.set(cacheKey, result, options);
        return result;
      };
    } else if (returnType === ReturnType.OBSERVABLE) { // TODO remove async
      descriptor.value = async function(...args: any[]) {
        if (!this.cacheService || !(this.cacheService instanceof CacheService)) {
          throw new InternalServerErrorException('Target Class should inject CacheService');
        }

        const cacheKey = `${className}:${methodName}:${args.map(a => JSON.stringify(a)).join()}`;

        const entry = await this.cacheService.get(cacheKey);
        if (entry) {
          return entry;
        }

        const result = originalMethod.apply(this, args);

        return result.pipe(tap(methodResult => this.cacheService.set(cacheKey, methodResult, options)));
      };
    } else {
      descriptor.value = async function(...args: any[]) {
        if (!this.cacheService || !(this.cacheService instanceof CacheService)) {
          throw new InternalServerErrorException('Target Class should inject CacheService');
        }

        const cacheKey = `${className}:${methodName}:${args.map(a => JSON.stringify(a)).join()}`;

        const entry = await this.cacheService.get(cacheKey);
        if (entry) {
          return entry;
        }

        const result = originalMethod.apply(this, args);

        await this.cacheService.set(cacheKey, result, options);
        return result;
      };
    }

    return descriptor;
  };
}
