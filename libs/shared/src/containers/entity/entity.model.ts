export interface Entity {
  id: number;
}

export interface EntityColumnDef<T> {
  path: string; //Unique identifier
  header?: string;
  cell?: (entity: T) => string; // default : (entity) => row[entityColumnDef.path]
}
