import { Body, Controller, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CrudController } from '../../core';
import { Cluster } from './cluster.entity';
import { ClusterService } from './cluster.service';
import { Roles, RolesEnum } from '../../auth';
import { CreateClusterDto } from './dto/create-cluster.dto';
import { UpdateClusterDto } from './dto/update-cluster.dto';
import { Observable } from 'rxjs';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Project', 'Cluster', 'Admin')
@Roles(RolesEnum.ADMIN)
@Controller('cluster')
export class ClusterController extends CrudController<Cluster> {
  constructor(private readonly clusterService: ClusterService) {
    super(clusterService);
  }

  @Roles(RolesEnum.USER)
  @ApiOperation({ title: 'Get kubernetes cluster names' })
  @ApiResponse({ status: HttpStatus.OK, description: 'All records', type: String, isArray: true })
  @Get('clusterNames')
  getClusterNames(): Observable<string[]> {
    return this.clusterService.getClusterNames();
  }

  @ApiOperation({ title: 'Find by Name' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: Cluster })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get('byName/:name')
  async findByName(@Param('name') name: string): Promise<Cluster> {
    return this.clusterService.findOne({ name });
  }

  @ApiOperation({ title: 'Create new record' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The record has been successfully created.', type: Cluster })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @Post()
  async create(@Body() entity: CreateClusterDto): Promise<Cluster> {
    return super.create(entity);
  }

  @ApiOperation({ title: 'Update an existing record' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The record has been successfully edited.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body() entity: UpdateClusterDto): Promise<any> {
    return super.update(id, entity);
  }

  // @Roles(RolesEnum.ADMIN) // FIXME: remove me: class level not working.
  // @ApiOperation({ title: 'Delete record' })
  // @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The record has been successfully deleted' })
  // @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  // @Delete(':id')
  // async delete(@Param('id') id: string, ...options: any[]): Promise<any> {
  //   return super.delete(id);
  // }
}
