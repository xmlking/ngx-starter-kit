import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityFormComponent } from '@ngx-starter-kit/shared';
import { subYears } from 'date-fns';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Account, Gender } from '../../models/account.model';
import { states } from './states';

@Component({
  selector: 'ngx-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss'],
})
export class AccountEditComponent extends EntityFormComponent<Account> {
  readonly genderOptions = Object.keys(Gender);
  readonly states: string[] = states;
  filteredStates: Observable<string[]>;

  readonly maxDate = new Date();
  readonly minDate = subYears(this.maxDate, 100);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; payload: Account },
    public dialogRef: MatDialogRef<AccountEditComponent>,
    private fb: FormBuilder,
  ) {
    super(data, dialogRef);
  }

  /* Optional */
  // tslint:disable-next-line
  ngOnInit() {
    super.ngOnInit();
    this.filteredStates = this.entityForm.get('address.state').valueChanges.pipe(
      startWith(''),
      map(state => (state ? this.filterStates(state) : this.states.slice())),
    );
  }

  private filterStates(name: string) {
    return this.states.filter(state => state.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  buildForm(item: Account) {
    // this.entityForm = this.fb.group(item);
    this.entityForm = this.fb.group(
      {
        first_name: [item.first_name || '', Validators.required],
        last_name: [item.last_name || '', Validators.required],
        gender: [item.gender || '', Validators.required],
        dob: [item.dob, Validators.required],
        email: [item.email || '', [Validators.required, Validators.email]],
        phone: [item.phone || '', [Validators.required, Validators.minLength(11)]],
        company: [item.company || '', Validators.required],
        address: this.fb.group({
          street: [item.address.street || '', Validators.required],
          city: [item.address.city || '', Validators.required],
          state: [item.address.state || '', Validators.required],
          zip: [item.address.zip || '', Validators.required],
        }),
      },
      { updateOn: 'blur' },
    );
  }
}
