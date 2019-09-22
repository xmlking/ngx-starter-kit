import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { format } from 'date-fns';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { Entity } from './entity.model';

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
    return this.httpClient.get<T>(`${this.baseUrl}/${this.entityPath}/${id}`).pipe(
      catchError(this.handleError),
      // finalize(() => this.loadingSubject.next(false))
    );
  }

  // findAll(filter: Filter, order = 'DESC', skip = 0, take = 100): Observable<IPagination<T>> | Observable<never> {
  findAll(filter: Filter, order = 'DESC', skip = 0, take = 100): Observable<T[]> | Observable<never> {
    this.loadingSubject.next(true);
    return this.httpClient
      .get<T[]>(`${this.baseUrl}/${this.entityPath}`, {
        params: new HttpParams()
          .set('filter', 'filter TODO')
          .set('order', order)
          .set('skip', skip.toString())
          .set('take', take.toString()),
      })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError),
        finalize(() => this.loadingSubject.next(false)),
      );
  }

  // getAll(): Observable<IPagination<T>> {
  getAll(): Observable<T[]> {
    this.loadingSubject.next(true);
    return this.httpClient.get<T[]>(`${this.baseUrl}/${this.entityPath}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }

  delete(id: number | string) {
    this.loadingSubject.next(true);
    return this.httpClient.delete(`${this.baseUrl}/${this.entityPath}/${id}`).pipe(
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }

  post(entity: T) {
    this.loadingSubject.next(true);
    return this.httpClient.post(`${this.baseUrl}/${this.entityPath}`, entity).pipe(
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }

  put(id: number | string, entity: T) {
    console.log(entity);
    this.loadingSubject.next(true);
    return this.httpClient.put(`${this.baseUrl}/${this.entityPath}/${id}`, entity).pipe(
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }

  protected handleError(error: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (typeof error === 'string') {
      errorMessage = error;
    } else {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${error.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${error.status}, with body ${error.message}`;
      }
    }
    console.error(error);
    // return an ErrorObservable with a user-facing error message
    return throwError(errorMessage);
  }

  protected convertToJson(body: any) {
    const temporalFunctionToJson = Date.prototype.toJSON;
    Date.prototype.toJSON = function() {
      return format(this, 'YYYY-MM-DD');
    };

    const jsonBody = JSON.stringify(body);

    Date.prototype.toJSON = temporalFunctionToJson;
    return jsonBody;
  }
}
