import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';

export interface ICrudService<T> {
  getAll(filter?: FindManyOptions<T>): Promise<[T[], number]>;
  getOne(id: any | FindOneOptions<T>): Promise<T>;
  create(entity: DeepPartial<T>): Promise<T>;
  update(id: any, entity: DeepPartial<T>): Promise<any>;
  delete(id: any): Promise<any>;
}
