import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository, UpdateResult } from 'typeorm';
import { CrudService, RequestContext } from '../../core';
import { Cluster } from './cluster.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Cache, CacheService } from '../../cache';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ClusterService extends CrudService<Cluster> {
  constructor(
    @InjectRepository(Cluster) private readonly clusterRepository: Repository<Cluster>,
    private cacheService: CacheService,
  ) {
    super(clusterRepository);
  }

  @Cache<string[]>({ ttl: 60 * 60 * 3 })
  getClusterNames() {
    return from(super.findAll()).pipe(map(({items, total}) => items.map(c => c.name)));
  }

  /**
   * FIXME: workaround as @BeforeUpdate don't work with repository.update().
   */
  async update(
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
