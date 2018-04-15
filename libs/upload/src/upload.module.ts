import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatDialogModule, MatListModule, MatProgressBarModule } from '@angular/material';
import { UploadComponent } from './/upload.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UploadService } from './upload.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatListModule, FlexLayoutModule, HttpClientModule, MatProgressBarModule],
  declarations: [UploadComponent],
  exports: [UploadComponent],
  entryComponents: [UploadComponent],
  providers: [UploadService]
})
export class UploadModule {}
