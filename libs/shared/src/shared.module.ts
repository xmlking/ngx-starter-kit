import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EntityTableComponent } from './components/entity-table/entity-table.component';
import { MinValidatorDirective } from './directives/min/min.directive';
import { RouterModule } from '@angular/router';

const COMPONENTS = [EntityTableComponent];

const DIRECTIVES = [MinValidatorDirective];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [
    CommonModule,
    FormsModule, //FIXME : remove
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule {}
