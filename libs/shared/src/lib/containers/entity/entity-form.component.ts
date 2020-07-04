import { Inject, OnInit, Directive } from '@angular/core';
import { Entity } from './entity.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Directive()
export abstract class EntityFormComponent<TEntity extends Entity> implements OnInit {
  title: string;
  entity: TEntity;
  entityForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: { title: string; payload: TEntity },
    protected dialogRef: MatDialogRef<EntityFormComponent<TEntity>>
  ) {
    this.title = data.title;
    this.entity = data.payload;
  }

  abstract buildForm(entity: TEntity);

  ngOnInit() {
    this.buildForm(this.entity);
  }

  submit() {
    this.dialogRef.close(this.entityForm.value as Partial<TEntity>);
  }
}
