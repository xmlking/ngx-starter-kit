import { BadRequestException, NotFoundException } from '@nestjs/common';
import {
  DeepPartial,
  DeleteResult,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  Repository,
  UpdateResult,
} from 'typeorm';
import { Base } from '../entities/base.entity';
import { ICrudService } from './icube.service';

export abstract class CrudService<T extends Base> implements ICrudService<T> {
  protected constructor(protected readonly repository: Repository<T>) {}

  public async getAll(options?: FindManyOptions<T>): Promise<[T[], number]> {
    const records = await this.repository.findAndCount(options);
    if (records[1] === 0) {
      throw new NotFoundException(`The requested records were not found`);
    }
    return records;
  }

  public async getOne(
    id: string | number | FindOneOptions<T> | FindConditions<T>,
    options?: FindOneOptions<T>,
  ): Promise<T> {
    const record = await this.repository.findOne(id as any, options);
    if (!record) {
      throw new NotFoundException(`The requested record was not found`);
    }
    return record;
  }

  public async create(entity: DeepPartial<T>): Promise<T> {
    const obj = this.repository.create(entity);
    try {
      // https://github.com/Microsoft/TypeScript/issues/21592
      return await this.repository.save(obj as any);
    } catch (err /*: WriteError*/) {
      throw new BadRequestException(err);
    }
  }

  public async update(id: string | number | FindConditions<T>, entity: DeepPartial<T>): Promise<UpdateResult> {
    try {
      return await this.repository.update(id, entity);
    } catch (err /*: WriteError*/) {
      throw new BadRequestException(err);
    }
  }

  public async delete(criteria: string | number | FindConditions<T>): Promise<DeleteResult> {
    try {
      return this.repository.delete(criteria);
    } catch (err) {
      throw new NotFoundException(`The record was not found`, err);
    }
  }
}
