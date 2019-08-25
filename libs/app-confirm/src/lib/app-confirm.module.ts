import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfirmComponent } from './app-confirm.component';
import { AppConfirmService } from './app-confirm.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, FlexLayoutModule],
  declarations: [AppConfirmComponent],
  providers: [AppConfirmService],
  entryComponents: [AppConfirmComponent],
})
export class AppConfirmModule {}
