import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [MatIconModule, FlexLayoutModule, RouterModule, CommonModule],
  exports: [BreadcrumbsComponent],
  declarations: [BreadcrumbsComponent],
})
export class BreadcrumbsModule {}
