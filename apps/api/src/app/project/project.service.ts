import { BadRequestException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService, IPagination, RequestContext } from '../core';
import { DeepPartial, FindConditions, Repository, UpdateResult } from 'typeorm';
import { Project } from './project.entity';
import { KubernetesService } from './kubernetes/kubernetes.service';
import { ClusterService } from './cluster/cluster.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindOwnProjectsDto } from './dto/find-own-projects.dto';
import { FindProjectsDto } from './dto/find-projects.dto';
import { User } from '@ngx-starter-kit/models';
import { KubeContext } from './interfaces/kube-context';

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

  async findAll({ take, skip, order, ...where }: FindProjectsDto): Promise<IPagination<Project>> {
    return super.findAll({ where, take, skip, order });
  }

  async searchAll(query): Promise<IPagination<Project>> {
    console.log(query)
    return super.findAll(query);
  }

  async hasNamespace(cluster: string, namespace: string) {
    return (await this.projectRepository.count({ where: { cluster, namespace } })) > 0;
  }

  async findOwn({ take, skip, order }: FindOwnProjectsDto, actor: User): Promise<IPagination<Project>> {
    const criteria = new FindProjectsDto({ createdBy: actor, take, skip, order });
    console.log('findOwn criteria', criteria);
    return super.findAll(criteria);
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
    const cluster = await this.clusterService.findOne({ name: (entity as CreateProjectDto).clusterName });
    if (cluster === undefined) {
      throw new BadRequestException('cluster not found');
    }
    entity.cluster = cluster;
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
