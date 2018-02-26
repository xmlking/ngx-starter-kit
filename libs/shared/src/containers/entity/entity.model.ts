export interface Entity {
  id: number | string;
}

export interface EntityColumnDef<T> {
  path: string; //Unique identifier
  header?: string;
  cell?: (entity: T) => string; // default : (entity) => row[entityColumnDef.path]
}
