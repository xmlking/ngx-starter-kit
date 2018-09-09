import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { classToPlain } from 'class-transformer';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, call$: Observable<T>): Observable<Response<T>> {
    return call$.pipe(map((data: Observable<T>) => classToPlain(data, { excludePrefixes: ['_id'] })));
  }
}
