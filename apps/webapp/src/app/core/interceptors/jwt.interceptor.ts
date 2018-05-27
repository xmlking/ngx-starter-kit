// import { Injectable, Injector } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Store } from '@ngxs/store';
// import { environment } from '@env/environment';
//
// const allowedUrls = [
//   environment.API_BASE_URL,
//   environment.SEARCH_BASE_URL,
//   environment.GRAPH_BASE_URL
// ]
//
// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//
//   constructor( private store : Store) {}
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     //const token = this.store.selectSnapshot<string>((state: AuthState) => state.auth.profile.token);
//     const token = 'sumo...xyz';
//
//     const url = req.url.toLowerCase();
//     const found = !!allowedUrls.find(u => url.startsWith(u));
//     if (!found) return next.handle(req);
//
//     req = req.clone({
//       setHeaders: {
//         Authorization: `Basic ${token}`
//       }
//     });
//
//     return next.handle(req);
//   }
// }
