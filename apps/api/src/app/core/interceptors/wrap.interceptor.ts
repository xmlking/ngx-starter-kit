import { NestInterceptor, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WrapInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    return stream$.pipe(map(response => ({ status: 'success', data: response })));
  }
}
