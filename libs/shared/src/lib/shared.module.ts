import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgLetModule, RouterLinkMatchModule } from '@ngx-starter-kit/ngx-utils';
import { SharedFlexLayoutModule } from './shared-flex-layout.module';
import { SharedPerfectScrollbarModule } from './shared-perfect-scrollbar.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    NgLetModule,
    ReactiveFormsModule,
    RouterLinkMatchModule,
    SharedFlexLayoutModule,
    SharedPerfectScrollbarModule,

  ],
})
export class SharedModule {}
