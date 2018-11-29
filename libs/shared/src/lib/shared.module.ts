import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MaterialModule } from '@ngx-starter-kit/material';
import { MaterialDateModule } from '@ngx-starter-kit/material';
import { BreadcrumbsModule } from '@ngx-starter-kit/breadcrumbs';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, LAYOUT_CONFIG } from '@angular/flex-layout';
import { MinValidatorDirective } from './directives/min/min.directive';
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive';
import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateFnsModule, NgLetModule, RouterLinkMatchModule } from '@ngx-starter-kit/ngx-utils';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true,
};

const DIRECTIVES = [MinValidatorDirective, ClickOutsideDirective];

@NgModule({
  imports: [CommonModule, FlexLayoutModule.withConfig({ useColumnBasisZero: false })],
  declarations: [...DIRECTIVES],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MaterialModule,
    MaterialDateModule,
    NgLetModule,
    DateFnsModule,
    RouterLinkMatchModule,
    FontAwesomeModule,
    FormlyMaterialModule,
    PerfectScrollbarModule,
    ...DIRECTIVES,
  ],
  providers: [{ provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }],
})
export class SharedModule {}
