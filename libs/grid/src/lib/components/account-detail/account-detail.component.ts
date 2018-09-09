import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account.model';
import { fadeAnimation } from '@ngx-starter-kit/animations';

@Component({
  selector: 'ngx-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  animations: [fadeAnimation],
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  account: Account;
  sub: Subscription;
  animationTrigger$ = new BehaviorSubject<string>('');

  constructor(private accountService: AccountService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.accountService.getById(params['id']).subscribe(data => {
        this.animationTrigger$.next(params['id']);
        this.account = data;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
