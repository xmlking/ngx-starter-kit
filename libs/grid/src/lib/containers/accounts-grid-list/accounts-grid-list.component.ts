import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { List } from 'immutable';
import { MatButtonToggleGroup, MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { Account, Address, Gender } from '../../models/account.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'ngx-accounts-grid-list',
  templateUrl: './accounts-grid-list.component.html',
  styleUrls: ['./accounts-grid-list.component.scss']
})
export class AccountsGridListComponent implements OnInit, OnDestroy {
  @ViewChild('gridView') public gridView: MatButtonToggleGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  crumbs = List([
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Grid', link: '/dashboard/grid' },
    { name: 'Grid List' }
  ]);

  accountDataSource: MatTableDataSource<Partial<Account>>;
  renderData: BehaviorSubject<Partial<Account>[]>;
  selection = new SelectionModel<Partial<Account>>(false, []);

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAll().toPromise().then( accounts => {
      this.accountDataSource = new MatTableDataSource<Partial<Account>>(accounts);
      this.accountDataSource.paginator = this.paginator;
      this.renderData = this.accountDataSource.connect();
    })
  }

  ngOnDestroy() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.accountDataSource.filter = filterValue;
  }

  async onClick(entity: Partial<Account>) {
    this.selection.toggle(entity);
    const account = await this.accountService.getById(entity.id).toPromise();
    console.log(account)
  }
}
