import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[appMin],[formControlName],[formControl],[ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true }],
  exportAs: 'min',
})
export class MinValidatorDirective implements Validator {
  @Input()
  min: number;

  validate(control: AbstractControl): { [key: string]: any } {
    return this.min ? Validators.min(this.min)(control) : null;
  }
}
