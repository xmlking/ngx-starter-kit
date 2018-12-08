import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { listFadeAnimation } from '@ngx-starter-kit/animations';

import { DeleteNotification, FetchNotifications, MarkAllAsRead, MarkAsRead } from './notifications.actions';
import { Observable } from 'rxjs';
import { NotificationsState } from './notifications.state';
import { AppNotification } from './app-notification.model';

@Component({
  selector: 'ngx-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [listFadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent implements OnInit {
  @Select(NotificationsState) notifications$: Observable<AppNotification>;
  @Select(NotificationsState.unReadCount) unReadCount$: Observable<number>;
  isOpen: boolean;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchNotifications());
  }

  markAsRead(notification) {
    this.store.dispatch(new MarkAsRead(notification));
  }

  dismiss(notification, event) {
    event.stopPropagation();
    this.store.dispatch(new DeleteNotification(notification));
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

  trackById(index: number, item: AppNotification) {
    return item.id;
  }
}
