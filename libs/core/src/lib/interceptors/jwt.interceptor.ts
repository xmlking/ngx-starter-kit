import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { environment } from '@env/environment';
import { OAuthService } from '@xmlking/angular-oauth2-oidc-all';

const allowedUrls = [environment.API_BASE_URL, environment.DOCS_BASE_URL];

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store, private oauthService: OAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.oauthService.getAccessToken();
    // const token = this.store.selectSnapshot<string>((state: AuthState) => state.auth.profile.token);
    const url = req.url.toLowerCase();
    const found = !!allowedUrls.find(u => url.startsWith(u));
    if (!found) {
      return next.handle(req);
    }

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return next.handle(req);
  }
}
