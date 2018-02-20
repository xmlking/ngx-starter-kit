import {Account} from "@nx-starter-kit/crud/src/containers/accounts/account.model";

export interface Entity {
 id: number
}

export interface EntityColumnDef<T> {
  columnDef: string,
  header: string,
  cell: (row: T) => string
}
