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
  readonly displayFn = (entity: T) => entity[this.property];

  public constructor(init?: Partial<EntityColumnDef<T>>) {
    Object.assign(this, init);
  }
}
