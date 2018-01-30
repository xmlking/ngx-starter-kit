import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar-notification',
  templateUrl: './tool-bar-notification.component.html',
  styleUrls: ['./tool-bar-notification.component.scss']
})
export class ToolBarNotificationComponent implements OnInit {
  cssPrefix = 'toolbar-notification';
  isOpen = false;
  @Input() notifications = [];

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  select() {}

  delete(notification) {}
}
