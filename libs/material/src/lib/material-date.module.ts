import { NgModule } from '@angular/core';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatDatepickerModule } from '@angular/material';

const MODULE_EXPORTS = [MatMomentDateModule, MatDatepickerModule];

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
  imports: MODULE_EXPORTS,
  exports: MODULE_EXPORTS,
  providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS }, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class MaterialDateModule {}
