import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import { AccountService } from '../../services/account/account.service';
import { Account } from '../../state/account/account.interfaces';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  rows$: Observable<[Account]>;
  loadingIndicator = true;
  selected = [];
  editing = {};

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.refreshData();
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    // this.materialService.update()
    console.log(row.$$index, cell, event.target.value);
    // this.rows[row.$$index][cell] = event.target.value;
  }

  async create(row) {
    console.log('create', row);
  }

  async update(row) {
    console.log('save', row);
    try {
      await this.accountService.update(row as Account);
      //this.toastyService.info('updated');
      this.refreshData();
    } catch (err) {
      //this.toastyService.error(err);
    }
  }

  async delete(row) {
    console.log('delete', row);
    try {
      await this.accountService.delete(row.id);
      //this.toastyService.info('deleted');
      this.refreshData();
    } catch (err) {
      //this.toastyService.error(err);
    }
  }

  private refreshData() {
    this.loadingIndicator = true;
    // startWith needed for ngx-datatable.
    this.rows$ = this.accountService.list().startWith([]);
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1000);
    this.selected = [];
  }

  onSelect(event) {
    console.log('Select Event', event, this.selected);
  }

  showMessage() {
    console.log('my style is bootstrap');
  }
}
