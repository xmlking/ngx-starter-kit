import { Component, OnInit } from '@angular/core';

import { Account } from './account.model';
import { AccountService } from './account.service';
import { EntitiesComponent } from '@nx-starter-kit/shared';
import {Address, Gender} from "@nx-starter-kit/crud/src/containers/accounts/account.model";

@Component({
  selector: 'sumo-accounts',
  templateUrl: '../../../../shared/src/containers/entity/entity.component.html',
  styleUrls: ['../../../../shared/src/containers/entity/entity.component.scss'],
})
export class AccountsComponent extends EntitiesComponent<Account, AccountService> {
  readonly columns = [
    { columnDef: 'userId',    header: 'No.',      cell: (row: Account) => `${row.id}`           },
    { columnDef: 'userName',  header: 'Name',     cell: (row: Account) => `${row.name}`         },
    { columnDef: 'gender',    header: 'Gender',   cell: (row: Account) => `${row.gender}`       },
    { columnDef: 'age',       header: 'Age',      cell: (row: Account) => `${row.age}`          },
    { columnDef: 'city',      header: 'City',     cell: (row: Account) => `${row.address.city}` },
    { columnDef: 'state',     header: 'State',    cell: (row: Account) => `${row.address.state}`},
  ];

  readonly showActionColumn = true;
  readonly showToolbar = true;

  constructor(accountService: AccountService) {
    super(accountService);
  }
}
