export interface Cluster {
  id?: string;
  name: string;
  ver: string;
  baseUrl: string;
  token?: string;
  createdAt?: Date;
  updatedAt?: Date;
  readonly createdById?: string;
  readonly updatedById?: string;
}
