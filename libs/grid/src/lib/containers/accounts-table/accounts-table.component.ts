import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConfirmService } from '@ngx-starter-kit/app-confirm';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';
import { EntitiesComponent, EntityColumnDef } from '@ngx-starter-kit/shared';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { format } from 'date-fns';
import { throwError } from 'rxjs';
import { catchError, concatMap, filter, mergeMap, tap } from 'rxjs/operators';
import { AccountEditComponent } from '../../components/account-edit/account-edit.component';
import { Account, Address } from '../../models/account.model';
import { AccountService } from '../../services/account.service';

// TODO: search with facets https://github.com/sfeir-open-source/angular-search-experience
// https://ngx.tools/#/search?q=Go
@Component({
  selector: 'ngx-accounts-table',
  templateUrl: '../../../../../shared/src/lib/containers/entity/entity.component.html',
  styleUrls: ['../../../../../shared/src/lib/containers/entity/entity.component.scss'],
})
export class AccountsTableComponent extends EntitiesComponent<Account, AccountService> {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Grid', link: '/dashboard/grid' },
    { name: 'CRUD Table' },
  ];

  // readonly columns = [
  //   { property: 'id' },
  //   { property: 'name' },
  //   { property: 'gender' },
  //   { property: 'age' }
  // ] as EntityColumnDef<Account>[];
  readonly columns = [
    // prettier-ignore
    new EntityColumnDef<Account>({ property: 'userId', header: 'No.', displayFn: (entity) => `${entity.id}` }),
    // prettier-ignore
    // tslint:disable:max-line-length
    new EntityColumnDef<Account>({ property: 'Name', header: 'Name', displayFn: (entity) => `${entity.first_name} ${entity.last_name}` }),
    new EntityColumnDef<Account>({ property: 'gender', header: 'Gender' }),
    // prettier-ignore
    new EntityColumnDef<Account>({ property: 'dob', header: 'DoB', displayFn: (entity) => `${format(this.stringToDate(entity.dob), 'MMMM dd, yyyy')}` }),
    new EntityColumnDef<Account>({ property: 'city', header: 'City', displayFn: (entity) => `${entity.address.city}` }),
    new EntityColumnDef<Account>({
      property: 'state',
      header: 'State',
      displayFn: (entity) => `${entity.address.state}`,
    }),
  ] as EntityColumnDef<Account>[];

  // optional
  readonly showActionColumn = true;
  readonly showColumnFilter = true;
  readonly showToolbar = true;

  readonly formRef = AccountEditComponent;

  constructor(
    accountService: AccountService,
    private store: Store,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private confirmService: AppConfirmService
  ) {
    super(accountService);
  }

  // optional
  delete(item: Account) {
    return this.confirmService.confirm('Confirm', `Delete ${item.first_name} ${item.last_name}?`).pipe(
      filter((confirmed) => confirmed === true),
      mergeMap((_) => super.delete(item)),
      tap((_) => {
        this.snack.open('Member Deleted!', 'OK', { duration: 5000 });
        this.store.dispatch(new Navigate([`/dashboard/grid/crud-table`]));
      }),
      catchError((error) => {
        this.snack.open(error, 'OK', { duration: 10000 });
        return throwError('Ignore Me!');
      })
    );
  }

  // required to override
  getNewEntity(): Account {
    const entity = new Account();
    entity.address = new Address();
    return entity;
  }

  // optional
  showDetails(entity: Account) {
    if (entity) {
      this.store.dispatch(new Navigate([`/dashboard/grid/crud-table/${entity.id}`]));
    } else {
      this.store.dispatch(new Navigate(['/dashboard/grid/crud-table']));
    }
  }

  // filterPredicate(entity: Account, _filter: string): boolean  {
  //   return entity.first_name.indexOf(_filter) !== -1;
  // }

  /**
   *  openPopUp() is used in entity.component.html
   *  if you want different implantation (e.g., add-new-line instead of popup, inline edit)
   *  make a copy of entity.component.html as <entity>.component.html and implement your own add/edit logic.
   */
  openPopUp(entity?: Account) {
    let isNew = false;
    let id;
    if (!entity) {
      isNew = true;
      entity = this.getNewEntity();
    } else {
      id = entity.id;
    }
    const title = isNew ? 'Add Member' : 'Update Member';

    const dialogRef = this.dialog.open(this.formRef, {
      width: '720px',
      disableClose: true,
      data: { title, payload: entity },
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((res) => res !== false),
        // tap(res => console.log(res)),
        concatMap((res: Account) => super.updateOrCreate(res, id))
      )
      .subscribe(
        (_) => {
          this.snack.open(isNew ? 'Member Created!' : 'Member Updated!', 'OK', { duration: 5000 });
          this.store.dispatch(new Navigate([`/dashboard/grid/crud-table`]));
        },
        (error) => this.snack.open(error, 'OK', { duration: 10000 })
      );
  }
}
