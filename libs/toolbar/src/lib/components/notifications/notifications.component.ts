import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { listFadeAnimation } from "@ngx-starter-kit/animations";

@Component({
  selector: 'ngx-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [listFadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements OnInit {

  notifications: Array<any>;
  isOpen: boolean;

  constructor() {
  }

  ngOnInit() {
    this.notifications = [
      {
        icon: 'notifications',
        message: 'This is a notification',
        time: 'few sec ago',
        read: false,
        color: 'warn'
      },
      {
        icon: 'shopping_basket',
        message: 'User bought your template',
        time: '23 min ago',
        read: false,
        color: 'primary'
      },
      {
        icon: 'eject',
        message: 'Server Crashed',
        time: 'an hour ago',
        read: false,
        color: 'accent'
      },
      {
        icon: 'cached',
        message: 'New user registered',
        time: '6 hours ago',
        read: true,
        color: ''
      },
      {
        icon: 'code',
        message: 'John added you as friend',
        time: 'yesterday',
        read: true,
        color: ''
      }
    ];
  }

  unReadCount() {
    return this.notifications.filter(note =>  !(note.read) ).length;
  }

  markAsRead(notification) {
    notification.read = true;
  }

  dismiss(notification, event) {
    event.stopPropagation();
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  markAllAsRead() {
    this.notifications.forEach(notification => notification.read = true);
  }
}
