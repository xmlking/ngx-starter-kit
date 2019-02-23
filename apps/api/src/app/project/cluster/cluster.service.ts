import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository, UpdateResult } from 'typeorm';
import { CrudService } from '../../core';
import { Cluster } from './cluster.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class ClusterService extends CrudService<Cluster> {
  constructor(@InjectRepository(Cluster) private readonly clusterRepository: Repository<Cluster>) {
    super(clusterRepository);
  }

  /**
   * To make @BeforeUpdate work.
   */
  public async update(
    id: string | number,
    partialEntity: QueryDeepPartialEntity<Cluster>,
  ): Promise<UpdateResult | Cluster> {
    try {
      partialEntity.id = typeof id === 'string' ? parseInt(id, 10) : id;
      // https://github.com/typeorm/typeorm/issues/3687
      const item = await this.repository.preload(partialEntity as any);
      return await this.repository.save(item);
    } catch (err /*: WriteError*/) {
      throw new BadRequestException(err);
    }
  }
}
