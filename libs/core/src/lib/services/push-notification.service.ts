import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { throwError } from 'rxjs';
import { environment } from '@env/environment';
import { catchError, take } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  public baseUrl = environment.API_BASE_URL;
  private readonly entityPath = 'subscription';

  constructor(private readonly swPush: SwPush, private httpClient: HttpClient) {}

  async register() {
    if (!this.swPush.isEnabled) {
      return;
    }
    const existingSubscription = await this.swPush.subscription.pipe(take(1)).toPromise();
    if (existingSubscription) {
      return;
    }

    const subscription = await this.swPush.requestSubscription({ serverPublicKey: environment.webPush.publicKey });
    const {
      endpoint,
      keys: { p256dh, auth },
    } = subscription.toJSON();
    console.log('push subscription created', { endpoint, auth, p256dh });
    await this.httpClient
      .post(`${this.baseUrl}/${this.entityPath}`, { endpoint, auth, p256dh })
      .pipe(catchError(this.handleError))
      .toPromise();
  }

  async unregister() {
    if (!this.swPush.isEnabled) {
      return;
    }

    const subscription = await this.swPush.subscription.pipe(take(1)).toPromise();

    if (subscription) {
      console.log('deleting subscription', subscription.endpoint);
      await this.httpClient
        .delete(`${this.baseUrl}/${this.entityPath}/${encodeURIComponent(subscription.endpoint)}`)
        .pipe(catchError(this.handleError))
        .toPromise();
      await subscription.unsubscribe();
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
