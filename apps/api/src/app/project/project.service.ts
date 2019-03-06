import { BadRequestException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService, RequestContext } from '../core';
import { DeepPartial, FindConditions, Repository, UpdateResult } from 'typeorm';
import { Project } from './project.entity';
import { User } from '../auth';
import { KubernetesService } from './kubernetes/kubernetes.service';
import { ClusterService } from './cluster/cluster.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class ProjectService extends CrudService<Project> implements OnModuleInit {
  private readonly logger = new Logger(ProjectService.name);

  constructor(
    @InjectRepository(Project) private readonly projectRepository: Repository<Project>,
    private readonly clusterService: ClusterService,
    private readonly kservice: KubernetesService,
  ) {
    super(projectRepository);
  }

  async onModuleInit() {
    this.logger.log('Initialization... ProjectService');
  }

  // async findByUserIdOrGroups(filter: SearchProjectDto): Promise<Project[]> {
  //   const cursor = this.projectRepository.createEntityCursor({
  //     $or: [
  //       {
  //         bsId: filter.userId,
  //       },
  //       {
  //         'memberships.name': filter.userId,
  //       },
  //       {
  //         memberships: { $elemMatch: { name: filter.userId, type: 'User' } },
  //       },
  //       {
  //         memberships: { $elemMatch: { name: { $in: filter.groups }, type: 'Group' } },
  //       },
  //     ],
  //     $and: [
  //       {
  //         isActive: true,
  //       },
  //     ],
  //   });
  //   return cursor.limit(50).toArray();
  // }

  async create(entity: DeepPartial<Project>, user: User): Promise<Project> {
    entity.cluster = await this.clusterService.getOne({ name: (entity as CreateProjectDto).clusterName });
    // TODO: should we auto apply current user's username/email or let users create on behalf of others?
    if (!entity.username) {
      entity.username = user.username;
    }
    if (!entity.email) {
      entity.email = user.email;
    }
    return await super.create(entity);
  }

  /**
   * FIXME: workaround as @BeforeUpdate don't work with repository.update().
   */
  async update(
    id: string | number | FindConditions<Project>,
    partialEntity: QueryDeepPartialEntity<Project>,
    ...options: any[]
  ): Promise<UpdateResult | Project> {
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
