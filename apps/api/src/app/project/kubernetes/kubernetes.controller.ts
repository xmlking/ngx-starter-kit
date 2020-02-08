import { Controller, Get, Logger, Param } from '@nestjs/common';
import { ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles, RolesEnum } from '../../auth/decorators';
import { KubernetesService } from './kubernetes.service';

@ApiOAuth2(['read'])
@ApiTags('Project', 'Kubernetes')
@Controller('kubernetes')
export class KubernetesController {
  readonly logger = new Logger(KubernetesController.name);

  constructor(private readonly kubernetesService: KubernetesService) {}

  // @ApiExcludeEndpoint()
  @Roles(RolesEnum.ADMIN)
  @ApiTags('Admin')
  @ApiOperation({ summary: 'Refresh kubernetes clusters from database' })
  @Get('refresh')
  refreshClusters(): Promise<any> {
    return this.kubernetesService.refreshClusters();
  }

  @Roles(RolesEnum.ADMIN)
  @ApiTags('Admin')
  @ApiOperation({ summary: 'Get all namespaces in a cluster by cluster name' })
  @Get(':cluster')
  listNamespaces(@Param('cluster') cluster: string): Promise<any> {
    return this.kubernetesService.listNamespaces(cluster);
  }

  @ApiOperation({ summary: 'Find one namespace in a cluster by namespace name' })
  @Get(':cluster/:namespace')
  getNamespace(@Param('cluster') cluster: string, @Param('namespace') namespace: string): Promise<any> {
    return this.kubernetesService.getNamespace({ cluster, namespace });
  }

  @ApiOperation({ summary: 'Scrape all data in a cluster by namespace name' })
  @Get('scrape/:cluster/:namespace')
  scrape(@Param('cluster') cluster: string, @Param('namespace') namespace: string): Promise<any> {
    return this.kubernetesService.scrape({ cluster, namespace });
  }
}
