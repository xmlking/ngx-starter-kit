import {Component} from '@angular/core';

import {Account, Address, Gender} from './account.model';
import {AccountService} from './account.service';
import {EntitiesComponent} from '@nx-starter-kit/shared';
import {AppConfirmService} from "@nx-starter-kit/app-confirm";
import {MatDialog, MatSnackBar} from "@angular/material";
import {catchError, tap, filter, map, mergeMap} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {AccountFormComponent} from "./account-form.component";

@Component({
  selector: 'sumo-accounts',
  templateUrl: '../../../../shared/src/containers/entity/entity.component.html',
  styleUrls: ['../../../../shared/src/containers/entity/entity.component.scss']
})
export class AccountsComponent extends EntitiesComponent<Account, AccountService> {
  // readonly columns = [ { path: 'id'},{ path: 'name'},{ path: 'gender'},{ path: 'age'} ]
  readonly columns = [
    {path: 'userId', header: 'No.', cell: (row: Account) => `${row.id}`},
    {path: 'userName', header: 'Name', cell: (row: Account) => `${row.name}`},
    {path: 'gender', header: 'Gender', cell: (row: Account) => `${row.gender}`},
    {path: 'age', header: 'Age', cell: (row: Account) => `${row.age}`},
    {path: 'city', header: 'City', cell: (row: Account) => `${row.address.city}`},
    {path: 'state', header: 'State', cell: (row: Account) => `${row.address.state}`}
  ];

  // optional
  readonly showActionColumn = true;
  readonly showToolbar = true;

  readonly formRef = AccountFormComponent;

  constructor(accountService: AccountService,
              private dialog: MatDialog,
              private snack: MatSnackBar,
              private confirmService: AppConfirmService) {
    super(accountService);
  }

  // optional
  delete(item: Account) {
    return this.confirmService.confirm('Confirm', `Delete ${item.name}?`).pipe(
      filter(confirmed=> confirmed === true),
      mergeMap(_ => super.delete(item)),
      map(_ =>
        this.snack.open('Member Deleted!', 'OK', {duration: 5000})
      ),
      catchError(error => {
        this.snack.open(error, 'OK', {duration: 10000});
        return new ErrorObservable('Ignore Me!')
      })
    )
  }

  // required to override
  getNewEntity(): Account {
    const entity =  new Account();
    entity.address = new Address();
    return entity;
  }

  /**
   *  openPopUp() is used in entity.component.html
   *  if you want different implantation (e.g., add-new-line instead of popup, inline edit)
   *  make a copy of entity.component.html as <entity>.component.html and implement your own add/edit logic.
   **/
  openPopUp(entity: Account) {
    let isNew = false;
    if(!entity) {
      isNew = true;
      entity = this.getNewEntity()
    }
    const title = isNew ? 'Add Member' : 'Update Member';

    const dialogRef = this.dialog.open(this.formRef, {
      width: '720px',
      disableClose: true,
      data: {title: title, payload: entity}
    });

    dialogRef.afterClosed().pipe(
      filter(res=> res !== false),
      // tap(res => console.log(res)),
      map(res=> { if(!isNew) res.id = entity.id; return res }),
      mergeMap(res =>  super.updateOrCreate(res, isNew))
    ).subscribe(
      _ => this.snack.open(isNew? 'Member Created!': 'Member Updated!', 'OK', {duration: 5000}),
      error =>  this.snack.open(error, 'OK', {duration: 10000})
    )
  }

}



