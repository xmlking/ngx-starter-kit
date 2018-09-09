import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfirmComponent } from './app-confirm.component';
import { AppConfirmService } from './app-confirm.service';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, FlexLayoutModule],
  declarations: [AppConfirmComponent],
  providers: [AppConfirmService],
  entryComponents: [AppConfirmComponent],
})
export class AppConfirmModule {}
