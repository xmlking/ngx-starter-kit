import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { BreadcrumbsService } from './breadcrumbs.service';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [MatIconModule, CommonModule],
  exports: [BreadcrumbsComponent],
  declarations: [BreadcrumbsComponent],
  providers: [BreadcrumbsService]
})
export class BreadcrumbsModule {}
