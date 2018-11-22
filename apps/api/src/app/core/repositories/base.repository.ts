// https://github.com/nicolaspearson/salespal/blob/master/backend/src/repositories/BaseRepository.ts

import { FindOneOptions, FindManyOptions } from 'typeorm';

export default abstract class BaseRepository<T> {
  private entityName: string;

  constructor(entityName: string) {
    this.entityName = entityName;
  }

  // public async findManyByFilter(filter: FindManyOptions<T>): Promise<T> {
  //   const record = await this.executeRepositoryFunction(
  //     this.getRepository().findOne(filter)
  //   );
  //   if (!record) {
  //     throw new NotFoundError(`The requested record was not found`);
  //   }
  //   return record;
  // }
  //
  // public async findOneByFilter(filter: FindOneOptions<T>): Promise<T> {
  //   const record = await this.executeRepositoryFunction(
  //     this.getRepository().findOne(filter)
  //   );
  //   if (!record) {
  //     throw new NotFoundError(`The requested record was not found`);
  //   }
  //   return record;
  // }
}
