import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, map, retry } from 'rxjs/operators';
import { EntityService } from '@ngx-starter-kit/shared';
import { environment } from '@env/environment';
import { AppNotification } from '@ngx-starter-kit/notifications';

@Injectable({
  providedIn: 'root',
})
export class NotificationService extends EntityService<AppNotification> {
  // Optionally overwrite baseUrl
  public baseUrl = environment.API_BASE_URL;
  readonly entityPath = 'notifications';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(): Observable<AppNotification[]> {
    this.loadingSubject.next(true);
    return this.httpClient.get<[AppNotification[], number]>(`${this.baseUrl}/${this.entityPath}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
      // return without count
      map(data => data[0]),
    );
  }

  delete(id: number | string) {
    this.loadingSubject.next(true);
    return this.httpClient.delete(`${this.baseUrl}/${this.entityPath}/${id}`).pipe(
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }

  send(id: number | string) {
    this.loadingSubject.next(true);
    return this.httpClient.post(`${this.baseUrl}/${this.entityPath}/send`, { id }).pipe(
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }
}
