import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConfirmService } from '@ngx-starter-kit/app-confirm';
import { EntitiesComponent, EntityColumnDef } from '@ngx-starter-kit/shared';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { formatDistance } from 'date-fns';
import { throwError } from 'rxjs';
import { catchError, filter, mergeMap, tap } from 'rxjs/operators';
import { Subscription } from '../../models/subscription.model';
import { SubscriptionService } from '../../services/subscription.service';

// const entityHtmlTpl = require('../../../../../shared/src/lib/containers/entity/entity.component.html');
// const cellHtmlTpl = require('./cell.templates.html');

// tslint:disable-next-line
@Component({
  selector: 'ngx-admin-subscriptions',
  // FIXME: AOT build not working with require
  // template: entityHtmlTpl + cellHtmlTpl,
  templateUrl: './subscriptions.component.html',
  styleUrls: [
    './subscriptions.component.scss',
    '../../../../../shared/src/lib/containers/entity/entity.component.scss',
  ],
})
export class SubscriptionsComponent extends EntitiesComponent<Subscription, SubscriptionService> {
  @ViewChild('deleteButton', { static: true }) deleteTpl: TemplateRef<any>;
  columns: EntityColumnDef<Subscription>[];

  // optional
  readonly showColumnFilter = true;
  readonly showToolbar = true;

  constructor(
    subscriptionService: SubscriptionService,
    private store: Store,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private confirmService: AppConfirmService
  ) {
    super(subscriptionService);
  }

  // tslint:disable-next-line
  ngOnInit() {
    super.ngOnInit();
    this.columns = [
      new EntityColumnDef<Subscription>({ property: 'id', header: 'No.' }),
      new EntityColumnDef<Subscription>({ property: 'username', header: 'User' }),
      new EntityColumnDef<Subscription>({ property: 'topics', header: 'Topics' }),
      new EntityColumnDef<Subscription>({
        property: 'createdAt',
        header: 'Created',
        displayFn: (entity) =>
          `${formatDistance(this.stringToDate(entity.createdAt), new Date(), { addSuffix: true })}`,
      }),
      new EntityColumnDef<Subscription>({
        property: 'updatedAt',
        header: 'Updated',
        displayFn: (entity) =>
          `${formatDistance(this.stringToDate(entity.updatedAt), new Date(), { addSuffix: true })}`,
      }),
      new EntityColumnDef<Subscription>({ property: 'actions', header: 'Actions', template: this.deleteTpl }),
    ] as EntityColumnDef<Subscription>[];
  }

  // optional FIXME: remove
  openPopUp(entity?: Subscription) {}
  // optional
  delete(item: Subscription) {
    return this.confirmService.confirm('Confirm', `Delete Sub(${item.id}) for ${item.username}?`).pipe(
      filter((confirmed) => confirmed === true),
      mergeMap((_) => super.delete(item)),
      tap((_) => {
        this.snack.open('Subscription Deleted!', 'OK', { duration: 5000 });
        this.store.dispatch(new Navigate([`/admin/subscriptions`]));
      }),
      catchError((error) => {
        this.snack.open(error, 'OK', { duration: 10000 });
        return throwError('Ignore Me!');
      })
    );
  }

  // optional
  showDetails(entity: Subscription) {
    if (entity) {
      this.store.dispatch(new Navigate([`/admin/subscriptions/${entity.id}`]));
    } else {
      this.store.dispatch(new Navigate(['/admin/subscriptions']));
    }
  }
}
