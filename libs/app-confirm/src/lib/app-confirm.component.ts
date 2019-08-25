import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'ngx-confirm',
  templateUrl: './app-confirm.component.html',
  styleUrls: ['./app-confirm.component.scss'],
})
export class AppConfirmComponent {
  constructor(public dialogRef: MatDialogRef<AppConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
}
