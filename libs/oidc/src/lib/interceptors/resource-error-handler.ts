import { HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export abstract class ResourceErrorHandler {
  abstract handleError(err: HttpResponse<any>): Observable<any>;
}

export class NoopResourceErrorHandler implements ResourceErrorHandler {
  handleError(err: HttpResponse<any>): Observable<any> {
    return throwError(err);
  }
}
