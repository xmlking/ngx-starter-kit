import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { RandomAccount, RandomAccountService } from '../../services/random-account.service';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';

@Component({
  selector: 'ngx-accounts-grid-list',
  templateUrl: './accounts-grid-list.component.html',
  styleUrls: ['./accounts-grid-list.component.scss'],
})
export class AccountsGridListComponent implements OnInit, OnDestroy {
  @ViewChild('gridView')
  public gridView: MatButtonToggleGroup;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Grid', link: '/dashboard/grid' },
    { name: 'Grid List' },
  ];

  accountDataSource: MatTableDataSource<Partial<RandomAccount>>;
  renderData: BehaviorSubject<Partial<RandomAccount>[]>;
  selection = new SelectionModel<Partial<RandomAccount>>(false, []);

  constructor(private router: Router, private accountService: RandomAccountService) {}

  ngOnInit() {
    this.accountService
      .getAll()
      .toPromise()
      .then(accounts => {
        this.accountDataSource = new MatTableDataSource<Partial<RandomAccount>>(accounts);
        this.accountDataSource.paginator = this.paginator;
        this.renderData = this.accountDataSource.connect();
      });
  }

  ngOnDestroy() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.accountDataSource.filter = filterValue;
  }

  async onClick(account: Partial<RandomAccount>) {
    this.selection.toggle(account);
    const accountP = await this.accountService.getById(account.id.value).toPromise();
    console.log(accountP);
  }
}
