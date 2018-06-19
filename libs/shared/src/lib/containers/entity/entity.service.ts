import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { Entity } from './entity.model';
import { map, retry, catchError, finalize } from 'rxjs/operators';
import * as moment from 'moment';

export interface Filter {
  [name: string]: string | string[];
}

export abstract class EntityService<T extends Entity> {
  protected readonly baseUrl = environment.API_BASE_URL;
  protected loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  protected abstract entityPath: string;

  constructor(protected httpClient: HttpClient) {}

  getById(id: number | string) {
    // this.loadingSubject.next(true);
    return this.httpClient
      .get<T>(`${this.baseUrl}/${this.entityPath}/${id}`)
      .pipe(
        catchError(this.handleError),
        // finalize(() => this.loadingSubject.next(false))
      );
  }

  findAll(
    filter: Filter,
    sortOrder = 'asc',
    pageNumber = 0,
    pageSize = 100
  ): Observable<T[]> | Observable<never> {
    this.loadingSubject.next(true);
    return this.httpClient
      .get<T[]>(`${this.baseUrl}/${this.entityPath}`, {
        params: new HttpParams()
          .set('filter', 'filter TODO')
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
      })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError),
        finalize(() => this.loadingSubject.next(false))
      );
  }

  getAll(): Observable<T[]> {
    this.loadingSubject.next(true);
    return this.httpClient.get<T[]>(`${this.baseUrl}/${this.entityPath}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false))
    );
  }

  delete(id: number | string) {
    this.loadingSubject.next(true);
    return this.httpClient
      .delete(`${this.baseUrl}/${this.entityPath}/${id}`)
      .pipe(
        catchError(this.handleError),
        finalize(() => this.loadingSubject.next(false))
      );
  }

  post(entity: T) {
    this.loadingSubject.next(true);
    return this.httpClient
      .post(`${this.baseUrl}/${this.entityPath}`, entity)
      .pipe(
        catchError(this.handleError),
        finalize(() => this.loadingSubject.next(false))
      );
  }

  put(entity: T) {
    console.log(entity);
    this.loadingSubject.next(true);
    return this.httpClient
      .put(`${this.baseUrl}/${this.entityPath}`, entity)
      .pipe(
        catchError(this.handleError),
        finalize(() => this.loadingSubject.next(false))
      );
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an ErrorObservable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  protected convertToJson(body: any) {
    const temporalFunctionToJson = Date.prototype.toJSON;
    Date.prototype.toJSON = function() {
      return moment(this).format('YYYY-MM-DD');
    };

    const jsonBody = JSON.stringify(body);

    Date.prototype.toJSON = temporalFunctionToJson;
    return jsonBody;
  }
}
