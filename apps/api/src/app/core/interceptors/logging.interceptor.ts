import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name, true);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { url, method, params, query, headers } = request;

    this.logger.log(`Before: ${method} ${url} with :
     params: ${JSON.stringify(params)}, with query: ${JSON.stringify(query)}`);

    const now = Date.now();
    return next.handle().pipe(tap(() => this.logger.log(`After: ${method} ${url} took ${Date.now() - now}ms`)));
  }
}
