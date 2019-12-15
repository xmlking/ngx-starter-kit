import { Body, Controller, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { Roles, RolesEnum } from '../../auth';
import { CrudController } from '../../core';
import { Cluster } from './cluster.entity';
import { ClusterService } from './cluster.service';
import { CreateClusterDto } from './dto/create-cluster.dto';
import { UpdateClusterDto } from './dto/update-cluster.dto';

@ApiOAuth2(['read'])
@ApiTags('Project', 'Cluster', 'Admin')
@Roles(RolesEnum.ADMIN)
@Controller('cluster')
export class ClusterController extends CrudController<Cluster> {
  constructor(private readonly clusterService: ClusterService) {
    super(clusterService);
  }

  @Roles(RolesEnum.USER)
  @ApiOperation({ summary: 'Get kubernetes cluster names' })
  @Get('clusterNames')
  getClusterNames(): Observable<string[]> {
    return this.clusterService.getClusterNames();
  }

  @ApiOperation({ summary: 'Find by Name' })
  @Get('byName/:name')
  async findByName(@Param('name') name: string): Promise<Cluster> {
    return this.clusterService.findOne({ name });
  }

  @ApiOperation({ summary: 'Create new record' })
  @Post()
  async create(@Body() entity: CreateClusterDto): Promise<Cluster> {
    return super.create(entity);
  }

  @ApiOperation({ summary: 'Update an existing record' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() entity: UpdateClusterDto): Promise<any> {
    return super.update(id, entity);
  }

  // @Roles(RolesEnum.ADMIN) // FIXME: remove me: class level not working.
  // @ApiOperation({ summary: 'Delete record' })
  // @Delete(':id')
  // async delete(@Param('id') id: string, ...options: any[]): Promise<any> {
  //   return super.delete(id);
  // }
}
