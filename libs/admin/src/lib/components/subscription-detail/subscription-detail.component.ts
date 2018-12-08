import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription as RxSubscription } from 'rxjs';
import { fadeAnimation } from '@ngx-starter-kit/animations';

import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../models/subscription.model';

@Component({
  selector: 'ngx-subscription-detail',
  templateUrl: './subscription-detail.component.html',
  styleUrls: ['./subscription-detail.component.scss'],
  animations: [fadeAnimation],
})
export class SubscriptionDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  sub: RxSubscription;
  animationTrigger$ = new BehaviorSubject<string>('');

  constructor(private subscriptionService: SubscriptionService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.subscriptionService.getById(params['id']).subscribe(data => {
        this.animationTrigger$.next(params['id']);
        this.subscription = data;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
