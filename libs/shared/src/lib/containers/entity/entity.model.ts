import { TemplateRef } from '@angular/core';

export abstract class Entity {
  abstract get id(): number | string;
  [key: string]: any;
  constructor(init?: Partial<Entity>) {
    Object.assign(this, init);
  }
}

export class EntityColumnDef<T> {
  readonly property: string;
  readonly header = this.property;
  public visible = true;
  readonly sticky?: 'start' | 'end';
  readonly template?: TemplateRef<any>;
  readonly displayFn = (entity: T) => entity[this.property];

  public constructor(init?: Partial<EntityColumnDef<T>>) {
    Object.assign(this, init);
  }
}
