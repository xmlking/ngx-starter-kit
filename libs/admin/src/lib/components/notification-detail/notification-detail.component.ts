import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription as RxSubscription } from 'rxjs';
import { fadeAnimation } from '@ngx-starter-kit/animations';

import { NotificationService } from '../../services/notification.service';
import { AppNotification } from '@ngx-starter-kit/notifications';

@Component({
  selector: 'ngx-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.scss'],
  animations: [fadeAnimation],
})
export class NotificationDetailComponent implements OnInit, OnDestroy {
  notification: AppNotification;
  sub: RxSubscription;
  animationTrigger$ = new BehaviorSubject<string>('');

  constructor(private notificationService: NotificationService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.notificationService.getById(params['id']).subscribe(data => {
        this.animationTrigger$.next(params['id']);
        this.notification = data;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
