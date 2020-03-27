import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConfirmService } from '@ngx-starter-kit/app-confirm';
import { AppNotification, NotificationColor, NotificationIcon, TargetType } from '@ngx-starter-kit/notifications';
import { EntitiesComponent, EntityColumnDef } from '@ngx-starter-kit/shared';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { formatDistance } from 'date-fns';
import { throwError } from 'rxjs';
import { catchError, concatMap, filter, mergeMap, tap } from 'rxjs/operators';
import { NotificationEditComponent } from '../../components/notification-edit/notification-edit.component';
import { NotificationService } from '../../services/notification.service';

// const entityHtmlTpl = require('../../../../../shared/src/lib/containers/entity/entity.component.html');
// const cellHtmlTpl = require('./cell.templates.html');

// tslint:disable-next-line
@Component({
  selector: 'ngx-admin-notifications',
  // FIXME: AOT build not working with require
  // template: entityHtmlTpl + cellHtmlTpl,
  templateUrl: './notifications.component.html',
  styleUrls: [
    './notifications.component.scss',
    '../../../../../shared/src/lib/containers/entity/entity.component.scss',
  ],
})
export class NotificationsComponent extends EntitiesComponent<AppNotification, NotificationService> {
  @ViewChild('send', { static: true }) sendTpl: TemplateRef<any>;
  // @ViewChild('editDelete', {static: true}) editDeleteTpl: TemplateRef<any>;
  columns: EntityColumnDef<AppNotification>[];

  // optional
  readonly showActionColumn = true;
  readonly showColumnFilter = true;
  readonly showToolbar = true;
  readonly formRef = NotificationEditComponent;

  constructor(
    private notificationService: NotificationService,
    private store: Store,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private confirmService: AppConfirmService
  ) {
    super(notificationService);
  }

  // tslint:disable-next-line
  ngOnInit() {
    super.ngOnInit();
    this.columns = [
      new EntityColumnDef<AppNotification>({ property: 'id', header: 'No.', sticky: 'start' }),
      new EntityColumnDef<AppNotification>({ property: 'title', header: 'Title' }),
      new EntityColumnDef<AppNotification>({ property: 'body', header: 'Body' }),
      new EntityColumnDef<AppNotification>({ property: 'target', header: 'Target' }),
      new EntityColumnDef<AppNotification>({ property: 'targetType', header: 'Type' }),
      new EntityColumnDef<AppNotification>({ property: 'icon', header: 'Icon' }),
      new EntityColumnDef<AppNotification>({ property: 'color', header: 'Color' }),
      new EntityColumnDef<AppNotification>({ property: 'read', header: 'Read' }),
      new EntityColumnDef<AppNotification>({ property: 'native', header: 'Native' }),
      new EntityColumnDef<AppNotification>({ property: 'isActive', header: 'Active' }),
      new EntityColumnDef<AppNotification>({
        property: 'createdAt',
        header: 'Created',
        displayFn: (entity) =>
          `${formatDistance(this.stringToDate(entity.createdAt), new Date(), { addSuffix: true })}`,
      }),
      new EntityColumnDef<AppNotification>({
        property: 'updatedAt',
        header: 'Updated',
        displayFn: (entity) =>
          `${formatDistance(this.stringToDate(entity.updatedAt), new Date(), { addSuffix: true })}`,
      }),
      new EntityColumnDef<AppNotification>({ property: 'send', header: 'Send', template: this.sendTpl }),
      // new EntityColumnDef<AppNotification>({ property: 'actions', header: 'Actions', template: this.editDeleteTpl }),
    ] as EntityColumnDef<AppNotification>[];
  }

  // optional
  delete(item: AppNotification) {
    return this.confirmService.confirm('Confirm', `Delete Notification(${item.id})?`).pipe(
      filter((confirmed) => confirmed === true),
      mergeMap((_) => super.delete(item)),
      tap((_) => {
        this.snack.open('Notification Deleted!', 'OK', { duration: 5000 });
        this.store.dispatch(new Navigate([`/admin/notifications`]));
      }),
      catchError((error) => {
        this.snack.open(error, 'OK', { duration: 10000 });
        return throwError('Ignore Me!');
      })
    );
  }

  onSend(row: AppNotification) {
    return this.notificationService.send(row.id).pipe(
      tap((_) => {
        this.snack.open('Notification Sent!', 'OK', { duration: 5000 });
      }),
      catchError((error) => {
        this.snack.open(error, 'OK', { duration: 10000 });
        return throwError('Ignore Me!');
      })
    );
  }

  // required to override
  getNewEntity(): AppNotification {
    const entity = new AppNotification();
    entity.native = true;
    entity.target = 'all';
    entity.targetType = TargetType.ALL;
    entity.color = NotificationColor.WARN;
    entity.icon = NotificationIcon.NOTIFICATIONS;
    return entity;
  }

  // optional
  showDetails(entity: AppNotification) {
    if (entity) {
      this.store.dispatch(new Navigate([`/admin/notifications/${entity.id}`]));
    } else {
      this.store.dispatch(new Navigate(['/admin/notifications']));
    }
  }

  // filterPredicate(entity: AppNotification, _filter: string): boolean  {
  //   return entity.first_name.indexOf(_filter) !== -1;
  // }

  // optional
  openPopUp(entity?: AppNotification) {
    let isNew = false;
    let id;
    if (!entity) {
      isNew = true;
      entity = this.getNewEntity();
    } else {
      id = entity.id;
    }
    const title = isNew ? 'Add Notification' : 'Update Notification';

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
        concatMap((res: AppNotification) => super.updateOrCreate(res, id))
      )
      .subscribe(
        (_) => {
          this.snack.open(isNew ? 'Notification Created!' : 'Notification Updated!', 'OK', { duration: 5000 });
          this.store.dispatch(new Navigate(['/admin/notifications']));
        },
        (error) => this.snack.open(error, 'OK', { duration: 10000 })
      );
  }
}
