import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@nx-starter-kit/material';
import { MaterialDateModule } from '@nx-starter-kit/material';
import { FullscreenModule } from '@nx-starter-kit/fullscreen';
import { BreadcrumbsModule } from '@nx-starter-kit/breadcrumbs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MinValidatorDirective } from './directives/min/min.directive';
import { NgLetDirective } from './directives/ng-let.directive';
import {DraggableDirective} from "./directives/draggable/draggable.directive";
import { FooterComponent } from './components/footer/footer.component';

import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true
};

const COMPONENTS = [FooterComponent];

const DIRECTIVES = [MinValidatorDirective, NgLetDirective, DraggableDirective];

@NgModule({
  imports: [CommonModule, RouterModule, FullscreenModule, FlexLayoutModule, MaterialModule, PerfectScrollbarModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [
    CommonModule,
    FormsModule, //FIXME : remove
    ReactiveFormsModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MaterialModule,
    MaterialDateModule,
    PerfectScrollbarModule,
    FullscreenModule,
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  providers: [{ provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }]
})
export class SharedModule {}
