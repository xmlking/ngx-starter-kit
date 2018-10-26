import { BadRequestException, NotFoundException } from '@nestjs/common';
import { DeepPartial, FindManyOptions, FindOneOptions, Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Base } from '../entities/base.entity';
import { ICrudService } from './icube.service';

export abstract class CrudService<T extends Base> implements ICrudService<T> {
  protected constructor(protected readonly repository: Repository<T>) {}

  public async getAll(filter?: FindManyOptions<T>): Promise<[T[], number]> {
    const records = await this.repository.findAndCount(filter);
    if (records[1] === 0) {
      throw new NotFoundException(`The requested records were not found`);
    }
    return records;
  }

  public async getOne(filter: string): Promise<T> {
    const record = await this.repository.findOne(filter);
    if (!record) {
      throw new NotFoundException(`The requested record was not found`);
    }
    return record;
  }

  public async create(entity: DeepPartial<T>): Promise<T> {
    // FIXME: https://github.com/typeorm/typeorm/issues/1544
    const obj = this.repository.create(entity as any);
    try {
      return await this.repository.save(obj as any);
    } catch (err /*: WriteError*/) {
      throw new BadRequestException(err);
    }
  }

  // public async update(id: string, entity: DeepPartial<T>): Promise<FindAndModifyWriteOpResultObject> {
  //   try {
  //     return await this.repository.findOneAndUpdate({ id }, {$set: classToPlain(entity)});
  //   } catch (err) {
  //     console.log(err);
  //     throw new BadRequestException(err.message);
  //   }
  // }
  //
  // public async replace(id: string, entity: DeepPartial<T>): Promise<FindAndModifyWriteOpResultObject> {
  //   const obj = this.repository.create(entity);
  //   try {
  //     return await this.repository.findOneAndReplace({ id },  obj);
  //   } catch (err) {
  //     console.log(err);
  //     throw new BadRequestException(err.message);
  //   }
  // }
  //
  // public async delete(id: string): Promise<FindAndModifyWriteOpResultObject> {
  //   try {
  //     return await this.repository.findOneAndDelete({ id });
  //   } catch (err) {
  //     console.log(err);
  //     throw new NotFoundException(`The record was not found`);
  //   }
  // }

  public async update(id: string, entity: DeepPartial<T>): Promise<UpdateResult> {
    try {
      return await this.repository.update(id, entity);
    } catch (err /*: WriteError*/) {
      throw new BadRequestException(err);
    }
  }

  public async delete(id: string): Promise<DeleteResult> {
    const obj = await this.repository.findOne(id);
    if (obj) {
      // FIXME: https://github.com/typeorm/typeorm/issues/1544
      return this.repository.delete(obj as any);
    } else {
      throw new NotFoundException(`The record was not found`);
    }
  }
}
