import { Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Base } from '../entities/base.entity';
import { DeepPartial } from 'typeorm';
import { ICrudService } from './icube.service';

@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
@ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
export abstract class CrudController<T extends Base> {
  protected constructor(private readonly crudService: ICrudService<T>) {}

  @ApiOperation({ title: 'find all' })
  @ApiResponse({ status: HttpStatus.OK, description: 'All records', /* type: T, */ isArray: true })
  @Get()
  async findAll(options?: any): Promise<[T[], number]> {
    return this.crudService.getAll(options);
  }

  @ApiOperation({ title: 'Find by id' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record' /*, type: T*/ })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<T> {
    return this.crudService.getOne(id);
  }

  @ApiOperation({ title: 'Create new record' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The record has been successfully created.' /*, type: T*/ })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @Post()
  async create(@Body() entity: DeepPartial<T>, options?: any): Promise<T> {
    return this.crudService.create(entity);
  }

  @ApiOperation({ title: 'Update an existing record' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The record has been successfully edited.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body() entity: DeepPartial<T>, options?: any): Promise<any> {
    return this.crudService.update(id, entity); // FIXME: https://github.com/typeorm/typeorm/issues/1544
  }

  @ApiOperation({ title: 'Delete record' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Delete(':id')
  async delete(@Param('id') id: string, options?: any): Promise<any> {
    return this.crudService.delete(id);
  }
}
