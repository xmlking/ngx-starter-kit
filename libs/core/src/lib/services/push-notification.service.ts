import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { from as fromPromise, Observable, of } from 'rxjs';
import { environment } from '@env/environment';
// import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  private pushSubscription: PushSubscription;

  get available(): boolean {
    return this.swPush.isEnabled;
  }

  constructor(private readonly swPush: SwPush /*private readonly apiService: ApiService*/) {}

  async register() {
    if (!this.swPush.isEnabled) {
      return;
    }

    // Key generation: https://web-push-codelab.glitch.me
    const subscription = await this.swPush.requestSubscription({ serverPublicKey: environment.webPush.publicVapidKey });
    console.log('Push subscription', subscription);
    this.pushSubscription = subscription;
    // return this.apiService.post('push/register', subscription).subscribe();
  }

  unregister(): Observable<boolean> {
    if (this.pushSubscription) {
      return fromPromise(this.pushSubscription.unsubscribe());
    }

    return of(true);
  }
}
