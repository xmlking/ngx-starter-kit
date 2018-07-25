import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { listFadeAnimation } from '@ngx-starter-kit/animations';

import { Observable } from 'rxjs';
import { Notification } from './notification.model';
import { NotificationsState } from './notifications.state';
import { DeleteNotification, FetchNotifications, MarkAllAsRead, MarkAsRead } from './notifications.actions';
import { SendWebSocketAction } from '@ngx-starter-kit/socketio-plugin';

@Component({
  selector: 'ngx-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [listFadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent implements OnInit {
  @Select(NotificationsState) notifications$: Observable<Notification>;
  @Select(NotificationsState.unReadCount) unReadCount$: Observable<number>;
  isOpen: boolean;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchNotifications());
  }

  markAsRead(notification) {
    this.store.dispatch(new MarkAsRead(notification));
    notification.read = true;
  }

  dismiss(notification, event) {
    event.stopPropagation();
    this.store.dispatch(new DeleteNotification(notification));
    this.store.dispatch(new SendWebSocketAction(new DeleteNotification(notification)));
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  markAllAsRead() {
    this.store.dispatch(new MarkAllAsRead());
  }
}
