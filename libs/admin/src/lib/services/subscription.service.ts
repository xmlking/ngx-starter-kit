import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, map, retry } from 'rxjs/operators';
import { EntityService, IPagination } from '@ngx-starter-kit/shared';
import { environment } from '@env/environment';
import { Subscription } from '../models/subscription.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService extends EntityService<Subscription> {
  // Optionally overwrite baseUrl
  public baseUrl = environment.API_BASE_URL;
  readonly entityPath = 'subscription';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(): Observable<Subscription[]> {
    this.loadingSubject.next(true);
    return this.httpClient.get<IPagination<Subscription>>(`${this.baseUrl}/${this.entityPath}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
      // return without count
      map(data => data.items),
    );
  }
}
