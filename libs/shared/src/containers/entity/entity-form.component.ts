import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EntityService } from './entity.service';
import {Entity} from "./entity.model";

export abstract class EntityFormComponent<TEntity extends Entity, TEntityService extends EntityService<TEntity>> implements OnInit {
  isNew: boolean;

  entity: TEntity;

  constructor(protected entityService: TEntityService, protected router: Router, protected route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isNew = params['id'] == null;
      if (!this.isNew) {
        this.entityService.getOne(params['id']).subscribe(result => {
          if (result !== null) {
            this.onGet(result);
          } else {
            this.onResult();
          }
        }, this.onError);
      }
    }, this.onError);
  }

  onSubmit() {
    if (this.isNew) {
      this.entityService.post(this.entity).subscribe(success => {
        this.onResult();
      }, this.onError);
    } else {
      this.entityService.put(this.entity).subscribe(success => {
        this.onResult();
      }, this.onError);
    }
  }

  protected onGet(result: TEntity) {
    this.entity = result;
  }

  protected onError(error) {
    console.log(error);
  }

  private onResult() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
