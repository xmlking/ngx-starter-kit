import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadComponent } from "@nx-starter-kit/upload";

@Component({
  selector: 'nxtk-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  constructor(public dialog: MatDialog) {}

  public openUploadDialog() {
    const dialogRef = this.dialog.open(UploadComponent, { width: '50%', height: '50%' });
  }
}
