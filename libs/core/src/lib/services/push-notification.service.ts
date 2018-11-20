import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { from as fromPromise, Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { take } from 'rxjs/operators';
// import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {

  get available(): boolean {
    return this.swPush.isEnabled;
  }

  constructor(private readonly swPush: SwPush /*private readonly apiService: ApiService*/) {
    // subscribe for new messages for testing
    this.swPush.messages.subscribe(message => {
      console.log('received push notification', message);
    });
  }

  async register() {
    if (!this.available) {
      return;
    }

    // Key generation: https://web-push-codelab.glitch.me
    const subscription = await this.swPush.requestSubscription({ serverPublicKey: environment.webPush.publicVapidKey });
    console.log('Push subscription created', subscription.toJSON());
    // this.pushSubscription = subscription;
    // this.apiService.post('api/push', subscription).subscribe();
  }

  async unregister() {
    if (!this.available) {
      return;
    }

    const subscription = await this.swPush.subscription.pipe(take(1)).toPromise();

    if (subscription) {
      console.log('deleting subscription', subscription.toJSON());
      // this.apiService.delete('api/push', subscription).subscribe();
      console.log('subscription deleted from database');
      const res = await subscription.unsubscribe();
      console.log('subscription deleted from local', res);
    }
  }
}
