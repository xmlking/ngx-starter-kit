import { Body, Controller, HttpStatus, Logger, Param, Post, Put } from '@nestjs/common';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ProjectService } from './project.service';
import { KubernetesService } from './kubernetes/kubernetes.service';
import { CrudController } from '../core';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { CurrentUser, Token, User } from '../auth';
import { KubeContext } from './interfaces/kube-context';
import { UpdateProjectDto } from './dto/update-project.dto';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Project')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
@Controller('project')
export class ProjectController extends CrudController<Project> {
  private readonly logger = new Logger(ProjectController.name);

  constructor(private readonly projectService: ProjectService, private readonly kservice: KubernetesService) {
    super(projectService);
  }

  // @ApiOperation({ title: 'Find projects with any given groups or userId' })
  // @ApiResponse({ status: HttpStatus.OK, description: 'Found matching records', type: Project, isArray: true })
  // @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'No matching records found' })
  // @Post('/search')
  // async search(@Body() filter: SearchProjectDto): Promise<Project[]> {
  //   return this.projectService.findByUserIdOrGroups(filter);
  // }

  @ApiOperation({ title: 'Create new record, Self use only' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The record has been successfully created.', type: Project })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input, The response body may contain clues as to what went wrong', })
  @Post()
  async create(@Body() entity: CreateProjectDto, @CurrentUser() user: User, @Token() token): Promise<Project> {
    const context: KubeContext = { cluster: entity.clusterName, namespace: entity.namespace, labels: entity.labels };
    // defer(async () => { })
    // const rs1 = await this.kservice.createNamespace(context);
    // const rs2 = await this.kservice.createNetworkPolicy(context);
    // const rs3 = await this.kservice.createServiceAccount(context, entity.serviceAccountName);
    // const rs4 = await this.kservice.createClusterRoleBindingForServiceAccount(context, entity.serviceAccountName, RoleType.Admin);
    // const rs5 = await this.kservice.createClusterRoleBindingForDashboardUsers(context, user.username);
    // const rs6 = await this.kservice.createResourceQuotaForNamespace(context);
    // const rs7 = await this.kservice.createResourceLimitRangeForNamespace(context);

    return this.projectService.create(entity, user);
  }

  @ApiOperation({ title: 'Update an existing record' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The record has been successfully edited.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body() entity: UpdateProjectDto): Promise<any> {
    // TODO check if owner
    return super.update(id, entity);
  }
}
