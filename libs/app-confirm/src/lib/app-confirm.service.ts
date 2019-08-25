import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AppConfirmComponent } from './app-confirm.component';

@Injectable()
export class AppConfirmService {
  constructor(private dialog: MatDialog) {}

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<AppConfirmComponent>;
    dialogRef = this.dialog.open(AppConfirmComponent, {
      width: '380px',
      disableClose: true,
      data: { title, message },
    });
    return dialogRef.afterClosed() as Observable<boolean>;
  }
}
