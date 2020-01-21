import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@ngx-starter-kit/models';
import { CurrentUser, Roles, RolesEnum, Token } from '../auth';
import { CrudController } from '../core';
import { CreateProjectDto } from './dto/create-project.dto';
import { FindOwnProjectsDto } from './dto/find-own-projects.dto';
import { FindProjectsDto } from './dto/find-projects.dto';
import { ProjectList } from './dto/project-list.model';
import { UpdateProjectDto } from './dto/update-project.dto';
import { KubeContext } from './interfaces/kube-context';
import { KubernetesService } from './kubernetes/kubernetes.service';
import { Project } from './project.entity';
import { ProjectService } from './project.service';

@ApiOAuth2(['read'])
@ApiTags('Project')
@Controller('project')
export class ProjectController extends CrudController<Project> {
  private readonly logger = new Logger(ProjectController.name);

  constructor(private readonly projectService: ProjectService, private readonly kservice: KubernetesService) {
    super(projectService);
  }

  @ApiOperation({ summary: 'Find all Projects. Admins only' })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get()
  async findAll(@Query() filter: FindProjectsDto): Promise<ProjectList> {
    return this.projectService.findAll(filter);
  }

  @ApiOperation({
    summary: 'Search all Projects. Admins only',
    description: 'Ref: https://github.com/rjlopezdev/typeorm-express-query-builder'
  })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get('/search')
  async searchAll(query: any): Promise<ProjectList> {
    return this.projectService.searchAll(query);
  }

  @ApiOperation({ summary: 'find all user Projects' })
  @Get('/own')
  async findOwn(@Query() filter: FindOwnProjectsDto, @CurrentUser() user: User, @Token() token): Promise<ProjectList> {
    // TODO use token to get groups and fetch all projects that belongs to user and user's group
    return this.projectService.findOwn(filter, user);
  }

  // @ApiOperation({ summary: 'Find projects with any given groups or userId' })
  // @Post('/search')
  // async search(@Body() filter: SearchProjectDto): Promise<Project[]> {
  //   return this.projectService.findByUserIdOrGroups(filter);
  // }

  @ApiOperation({ summary: 'Create new record, Self use only' })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() entity: CreateProjectDto, @CurrentUser() user: User, @Token() token): Promise<Project> {
    const context: KubeContext = { cluster: entity.clusterName, namespace: entity.namespace, labels: entity.labels };
    // defer(async () => { })
    // const rs1 = await this.kservice.createNamespace(context);
    // const rs2 = await this.kservice.createNetworkPolicy(context);
    // const rs3 = await this.kservice.createServiceAccount(context, entity.serviceAccountName);
    // const rs4 = await
    // this.kservice.createClusterRoleBindingForServiceAccount(context, entity.serviceAccountName, RoleType.Admin);
    // const rs5 = await this.kservice.createClusterRoleBindingForDashboardUsers(context, user.username);
    // const rs6 = await this.kservice.createResourceQuotaForNamespace(context);
    // const rs7 = await this.kservice.createResourceLimitRangeForNamespace(context);

    return this.projectService.create(entity, user);
  }

  @ApiOperation({ summary: 'Update an existing record' })
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() entity: UpdateProjectDto
  ): Promise<any> {
    // TODO check if owner
    return super.update(id, entity);
  }
}
