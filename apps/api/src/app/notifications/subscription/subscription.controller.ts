import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CrudController } from '../../core';
import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';
import { CurrentUser, Roles, RolesEnum } from '../../auth/decorators';
import { User } from '../../auth';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Sumo', 'Subscription')
@Controller('subscription')
export class SubscriptionController extends CrudController<Subscription> {
  constructor(private readonly subscriptionService: SubscriptionService) {
    super(subscriptionService);
  }

  @ApiOperation({ title: 'find all Subscriptions. Admins only' })
  @ApiResponse({ status: HttpStatus.OK, description: 'All Subscriptions', /* type: Subscription, */ isArray: true })
  @ApiUseTags('admin')
  @Roles(RolesEnum.ADMIN)
  @Get()
  async findAll(): Promise<[Subscription[], number]> {
    return this.subscriptionService.getAll();
  }

  @ApiOperation({ title: 'find all user Subscriptions' })
  @ApiResponse({ status: HttpStatus.OK, description: 'All user Subscriptions', /* type: Subscription, */ isArray: true })
  @Get('user')
  async getUserSubscriptions(@CurrentUser() user): Promise<[Subscription[], number]> {
    return this.subscriptionService.getUserSubscriptions(user);
  }

  @ApiOperation({ title: 'Find by id. Admins only' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: Subscription })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiUseTags('admin')
  @Roles(RolesEnum.ADMIN)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Subscription> {
    return super.findById(id);
  }

  @ApiOperation({ title: 'Create new record' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
    type: Subscription,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @Post()
  async create(@Body() entity: CreateSubscriptionDto, @CurrentUser() user: User): Promise<Subscription> {
    const records = await this.subscriptionService.findAndCount({ endpoint: entity.endpoint });
    if (records[1] === 0) {
      return super.create({ ...entity, userId: user.userId });
    } else {
      return records[0][0];
    }
  }

  @ApiOperation({ title: 'Update an existing record' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The record has been successfully edited.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() entity: UpdateSubscriptionDto,
    @CurrentUser() user: User,
  ): Promise<any> {
    if (id.startsWith('http')) {
      return this.subscriptionService.update({ endpoint: id, userId: user.userId }, entity);
    } else {
      return this.subscriptionService.update({ id: parseInt(id, 10), userId: user.userId }, entity);
    }
  }

  @ApiOperation({ title: 'Delete record' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Delete(':id')
  async delete(@Param('id') id: string, @CurrentUser() user: User): Promise<any> {
    if (id.startsWith('http')) {
      return this.subscriptionService.delete({ endpoint: id, userId: user.userId });
    } else {
      return this.subscriptionService.delete({ id: parseInt(id, 10), userId: user.userId });
    }
  }
}
