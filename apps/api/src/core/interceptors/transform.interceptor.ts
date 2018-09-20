import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { classToPlain } from 'class-transformer';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
    return call$.pipe(map(data => classToPlain(data, { excludePrefixes: ['_id'] })));
  }
}
