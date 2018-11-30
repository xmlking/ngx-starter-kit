import { Controller, Get, HttpStatus, Logger, Param } from '@nestjs/common';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { KubernetesService } from './kubernetes.service';

@ApiOAuth2Auth(['read'])
@ApiUseTags('External', 'Kubernetes')
@ApiResponse({ status: HttpStatus.OK, description: 'Found' })
@ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
@Controller('kubernetes')
export class KubernetesController {
  public readonly logger = new Logger(KubernetesController.name);

  constructor(private readonly kubernetesService: KubernetesService) {}

  @ApiOperation({ title: 'Get all namespaces im a cluster' })
  @Get(':cluster')
  getAll(@Param('cluster') cluster: string): Promise<any> {
    return this.kubernetesService.listNamespaces(cluster);
  }

  @ApiOperation({ title: 'Find one namespace in a cluster by namespace' })
  @Get(':cluster/:namespace')
  findOne(@Param('cluster') cluster: string, @Param('namespace') namespace: string): Promise<any> {
    return this.kubernetesService.getNamespace(cluster, namespace);
  }
}
