import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Notification as AppNotification } from './notification.model';
import { EntityService } from '@ngx-starter-kit/shared';
import { Observable } from 'rxjs';
import { catchError, finalize, map, retry } from 'rxjs/operators';
import { BrowserFeatureKey, FeatureService } from '@ngx-starter-kit/core';

@Injectable()
export class NotificationsService extends EntityService<AppNotification> {
  public apiBaseUrl = environment.API_BASE_URL;
  readonly entityPath = 'notifications';

  constructor(httpClient: HttpClient, private readonly featureService: FeatureService) {
    super(httpClient);
  }

  /*
  async showNotification(title: string, message: string, button?: string, showNative = false): Promise<string> {
    const id = UUID.v4();
    if (showNative && this.featureService.detectFeature(BrowserFeatureKey.NotificationsAPI).supported
      && !this.featureService.isMobileAndroid()) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const notification = new Notification(title, {
          body: message
        });
        notification.onclick = () => {
          this.notificationClicked.next(id);
        };
        return id;
      }
    }
    this.showInAppNotification(title, message, button, id);
    return id;
  }

  private showInAppNotification(title: string, message: string, button: string, id) {
    this.notifications.next(new AppNotification(title, message, button, id));
  }
*/
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
}
