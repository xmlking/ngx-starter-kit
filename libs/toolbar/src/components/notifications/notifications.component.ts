import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nxtk-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input() notifications = [];
  isOpen: boolean;

  constructor() {}

  ngOnInit() {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  select() {}

  delete(notification) {}
}
