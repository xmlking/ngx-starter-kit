import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CrudController } from '../core';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiOAuth2(['read'])
@ApiTags('User')
@Controller()
export class UserController extends CrudController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @ApiOperation({ summary: 'Create new record' })
  @Post()
  async create(@Body() entity: CreateUserDto): Promise<User> {
    return super.create(entity);
  }

  @ApiOperation({ summary: 'Update an existing record' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() entity: UpdateUserDto): Promise<any> {
    return super.update(id, entity);
  }
}
