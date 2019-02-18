import { Inject, Injectable, Optional } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { ResourceErrorHandler } from './resource-error-handler';

import { AuthService } from '../services/auth.service';
import { OidcResourceInterceptorConfig } from '../types';

@Injectable()
export class DefaultResourceInterceptor implements HttpInterceptor {
  bypass: boolean;
  bearerPrefix: string;
  authorizationHeaderName: string;
  constructor(
    private authService: AuthService,
    private errorHandler: ResourceErrorHandler,
    @Optional() private resourceInterceptorConfig: OidcResourceInterceptorConfig,
  ) {
    this.bypass = !this.authService || !this.resourceInterceptorConfig || !this.resourceInterceptorConfig.allowedUrls;
    this.bearerPrefix = resourceInterceptorConfig.bearerPrefix.trim().concat(' ');
    this.authorizationHeaderName = resourceInterceptorConfig.authorizationHeaderName;
  }

  private checkUrl(url: string): boolean {
    const found = this.resourceInterceptorConfig.allowedUrls.find(u => url.startsWith(u));
    return !!found;
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.bypass) {
      // TODO: do we need this check?
      return next.handle(req);
    }

    if (!this.checkUrl(req.url.toLowerCase())) {
      return next.handle(req);
    }

    return from(this.authService.getToken()).pipe(
      mergeMap(accessToken => {
        if (accessToken) {
          const headers = req.headers.set(this.authorizationHeaderName, this.bearerPrefix + accessToken);
          req = req.clone({ headers });
        }
        return next.handle(req).pipe(catchError(err => this.errorHandler.handleError(err)));
      }),
    );
  }
}
