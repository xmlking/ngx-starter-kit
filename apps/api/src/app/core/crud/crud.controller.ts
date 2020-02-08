import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { DeepPartial } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Base } from '../entities/base';
import { ICrudService } from './icrud.service';
import { IPagination } from './pagination';
import { PaginationParams } from './pagination-params';

export abstract class CrudController<T extends Base> {
  protected constructor(private readonly crudService: ICrudService<T>) {}

  @ApiOperation({ summary: 'find all' })
  @Get()
  async findAll(filter?: PaginationParams<T>): Promise<IPagination<T>> {
    return this.crudService.findAll(filter);
  }

  @ApiOperation({ summary: 'Find by id' })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<T> {
    return this.crudService.findOne(id);
  }

  @ApiOperation({ summary: 'Create new record' })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() entity: DeepPartial<T>, ...options: any[]): Promise<T> {
    return this.crudService.create(entity);
  }

  @ApiOperation({ summary: 'Update an existing record' })
  @HttpCode(HttpStatus.ACCEPTED)
  @Put(':id')
  async update(@Param('id') id: string, @Body() entity: QueryDeepPartialEntity<T>, ...options: any[]): Promise<any> {
    return this.crudService.update(id, entity); // FIXME: https://github.com/typeorm/typeorm/issues/1544
  }

  @ApiOperation({ summary: 'Delete record' })
  @HttpCode(HttpStatus.ACCEPTED)
  @Delete(':id')
  async delete(@Param('id') id: string, ...options: any[]): Promise<any> {
    return this.crudService.delete(id);
  }
}
