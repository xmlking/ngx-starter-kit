// import { Injectable, Injector } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { Store } from '@ngxs/store';
// import { AuthState } from '@nx-starter-kit/auth';
//
// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//
//   constructor( private store : Store) {}
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = this.store.selectSnapshot<string>((state: AuthState) => state.auth.profile.token);
//
//     req = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//
//     return next.handle(req);
//   }
// }
