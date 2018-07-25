import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Notification } from './notification.model';
import { EntityService } from '@ngx-starter-kit/shared';
import {Observable} from "rxjs";
import {catchError, finalize, map, retry} from "rxjs/operators";

@Injectable()
export class NotificationsService extends EntityService<Notification> {
  public apiBaseUrl = environment.API_BASE_URL;
  readonly entityPath = 'notifications';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(): Observable<Notification[]> {
    this.loadingSubject.next(true);
    return this.httpClient.get<[Notification[], number]>(`${this.baseUrl}/${this.entityPath}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
      // return without count
      map(data => data[0])
    );
  }
}
