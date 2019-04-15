import { Component, Inject } from '@angular/core';
import { EntityFormComponent } from '@ngx-starter-kit/shared';
import { AppNotification, NotificationColor, NotificationIcon, TargetType } from '@ngx-starter-kit/notifications';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

function enumToOptions(enumType): { label: string; value: any }[] {
  return Object.keys(enumType).map(key => ({ label: key, value: enumType[key] }));
}

@Component({
  selector: 'ngx-notification-edit',
  templateUrl: './notification-edit.component.html',
  styleUrls: ['./notification-edit.component.scss'],
})
export class NotificationEditComponent extends EntityFormComponent<AppNotification> {
  model;
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; payload: AppNotification },
    public dialogRef: MatDialogRef<NotificationEditComponent>,
    private fb: FormBuilder,
  ) {
    super(data, dialogRef);
  }

  /* Optional */
  // tslint:disable-next-line
  ngOnInit() {
    super.ngOnInit();
  }

  buildForm(item: AppNotification) {
    this.entityForm = new FormGroup({});
    this.model = item;
    this.fields = [
      {
        key: 'title',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Title',
          placeholder: 'title',
          required: true,
        },
      },
      {
        key: 'body',
        type: 'input',
        templateOptions: {
          label: 'Body',
          required: true,
        },
      },
      {
        key: 'target',
        type: 'input',
        templateOptions: {
          label: 'Target',
          required: true,
        },
      },
      {
        key: 'targetType',
        type: 'select',
        templateOptions: {
          label: 'TargetType',
          options: enumToOptions(TargetType),
          required: true,
        },
      },
      {
        key: 'icon',
        type: 'select',
        templateOptions: {
          label: 'Icon',
          options: enumToOptions(NotificationIcon),
          required: true,
        },
      },
      {
        key: 'color',
        type: 'select',
        templateOptions: {
          label: 'Color',
          options: enumToOptions(NotificationColor),
          required: true,
        },
      },
      {
        key: 'native',
        type: 'checkbox',
        templateOptions: {
          label: 'Native',
          required: true,
        },
      },
    ];
  }
}
