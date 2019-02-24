import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository, UpdateResult } from 'typeorm';
import { CrudService, RequestContext } from '../../core';
import { Cluster } from './cluster.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class ClusterService extends CrudService<Cluster> {
  constructor(@InjectRepository(Cluster) private readonly clusterRepository: Repository<Cluster>) {
    super(clusterRepository);
  }

  /**
   * FIXME: workaround as @BeforeUpdate don't work with repository.update().
   */
  public async update(
    id: string | number | FindConditions<Cluster>,
    partialEntity: QueryDeepPartialEntity<Cluster>,
    ...options: any[]
  ): Promise<UpdateResult | Cluster> {
    try {
      const user = RequestContext.currentUser();
      if (user) {
        partialEntity.updatedBy = user;
      }
      return await this.repository.update(id, partialEntity);
    } catch (err /*: WriteError*/) {
      throw new BadRequestException(err);
    }
  }
}
