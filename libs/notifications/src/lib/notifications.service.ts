import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { AppNotification } from './app-notification.model';
import { EntityService, IPagination } from '@ngx-starter-kit/shared';
import { Observable } from 'rxjs';
import { catchError, finalize, map, retry } from 'rxjs/operators';
import { BrowserFeatureKey, FeatureService } from '@ngx-starter-kit/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService extends EntityService<AppNotification> {
  public apiBaseUrl = environment.API_BASE_URL;
  readonly entityPath = 'notifications';

  constructor(httpClient: HttpClient, private readonly featureService: FeatureService) {
    super(httpClient);
  }

  getAll(): Observable<AppNotification[]> {
    this.loadingSubject.next(true);
    return this.httpClient.get<IPagination<AppNotification>>(`${this.baseUrl}/${this.entityPath}/own`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
      // return without count
      map(data => data.items),
    );
  }

  /**
   * Util for showing native Notifications
   * @param noti:  {
   *    title: 'NGX WebApp Notification',
   *   options: {
   *     body: payload.message,
   *     icon: 'assets/icons/icon-72x72.png',
   *     data: {
   *       click_url: '/index.html',
   *     },
   *   },
   * }
   */
  async showNativeNotification(noti: { title: string; options?: Partial<NotificationOptions> }) {
    if (
      this.featureService.detectFeature(BrowserFeatureKey.NotificationsAPI).supported &&
      !this.featureService.isMobileAndroid()
    ) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const notification = new Notification(noti.title, noti.options);
        notification.onclick = () => {
          console.log('clicked todo: mark as read');
        };
      }
    }
  }
}
