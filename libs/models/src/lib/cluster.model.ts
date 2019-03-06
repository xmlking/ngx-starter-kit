export interface Cluster {
  id?: number | string;
  name: string;
  ver: string;
  baseUrl: string;
  token?: string;
  createdAt?: Date;
  updatedAt?: Date;
  readonly createdById?:  number | string;
  readonly updatedById?:  number | string;
}
