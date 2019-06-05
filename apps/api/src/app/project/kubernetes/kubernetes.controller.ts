import { Controller, Get, HttpStatus, Logger, Param } from '@nestjs/common';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { KubernetesService } from './kubernetes.service';
import { Roles, RolesEnum } from '../../auth/decorators';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Project', 'Kubernetes')
@ApiResponse({ status: HttpStatus.OK, description: 'Found' })
@ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
@Controller('kubernetes')
export class KubernetesController {
  readonly logger = new Logger(KubernetesController.name);

  constructor(private readonly kubernetesService: KubernetesService) {}

  // @ApiExcludeEndpoint()
  @Roles(RolesEnum.ADMIN)
  @ApiUseTags('Admin')
  @ApiOperation({ title: 'Refresh kubernetes clusters from database' })
  @Get('refresh')
  refreshClusters(): Promise<any> {
    return this.kubernetesService.refreshClusters();
  }

  @Roles(RolesEnum.ADMIN)
  @ApiUseTags('Admin')
  @ApiOperation({ title: 'Get all namespaces in a cluster by cluster name' })
  @ApiResponse({ status: HttpStatus.OK, description: 'All records', /* type: T, */ isArray: true })
  @Get(':cluster')
  listNamespaces(@Param('cluster') cluster: string): Promise<any> {
    return this.kubernetesService.listNamespaces(cluster);
  }

  @ApiOperation({ title: 'Find one namespace in a cluster by namespace name' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record' /*, type: T*/ })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get(':cluster/:namespace')
  getNamespace(@Param('cluster') cluster: string, @Param('namespace') namespace: string): Promise<any> {
    return this.kubernetesService.getNamespace({ cluster, namespace });
  }

  @ApiOperation({ title: 'Scrape all data in a cluster by namespace name' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record' /*, type: T*/ })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get('scrape/:cluster/:namespace')
  scrape(@Param('cluster') cluster: string, @Param('namespace') namespace: string): Promise<any> {
    return this.kubernetesService.scrape({ cluster, namespace });
  }
}
