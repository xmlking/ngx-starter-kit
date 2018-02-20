import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Account, Address, Gender} from './account.model';
import { AccountService } from './account.service';
import { EntityFormComponent } from '@nx-starter-kit/shared';

@Component({
  selector: 'sumo-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
})
export class AccountFormComponent extends EntityFormComponent<Account, AccountService> {
  genderOptions = Object.keys(Gender);
  constructor(accountService: AccountService, router: Router, route: ActivatedRoute) {
    super(accountService, router, route);
    this.entity = new Account();
    this.entity.address = new Address();
  }

}
