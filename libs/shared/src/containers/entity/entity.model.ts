export interface Entity {
  id: number | string;
  [key: string]: any;
}

export interface EntityColumnDef<T> {
  path: string; //Unique identifier
  header?: string;
  cell?: (entity: T) => string; // default : (entity) => row[entityColumnDef.path]
}
