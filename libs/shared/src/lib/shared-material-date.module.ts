import { NgModule } from '@angular/core';

import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule  } from '@angular/material/datepicker';


const MODULE_EXPORTS = [MatDatepickerModule, MatNativeDateModule];

const DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  exports: MODULE_EXPORTS,
  providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS }, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class SharedMaterialDateModule {}
