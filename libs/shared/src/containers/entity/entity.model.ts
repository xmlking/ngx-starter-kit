export interface Entity {
  readonly id: number | string;
  [key: string]: any;
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
