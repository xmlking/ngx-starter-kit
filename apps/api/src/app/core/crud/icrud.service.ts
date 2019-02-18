import { DeepPartial, DeleteResult, FindConditions, FindManyOptions, FindOneOptions, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface ICrudService<T> {
  getAll(filter?: FindManyOptions<T>): Promise<[T[], number]>;
  getOne(id: string | number | FindOneOptions<T> | FindConditions<T>, options?: FindOneOptions<T>): Promise<T>;
  create(entity: DeepPartial<T>, ...options: any[]): Promise<T>;
  update(id: any, entity: QueryDeepPartialEntity<T>, ...options: any[]): Promise<UpdateResult | T>;
  delete(id: any, ...options: any[]): Promise<DeleteResult>;
}
