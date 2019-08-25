import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CrudController } from '../../core';
import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';
import { CurrentUser, Roles, RolesEnum } from '../../auth/decorators';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SubscriptionList } from './dto/subscription-list.model';
import { FindSubscriptionsDto } from './dto/find-subscriptions.dto';
import { FindOwnSubscriptionsDto } from './dto/find-own-subscriptions.dto';
import { User } from '@ngx-starter-kit/models';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Subscription')
@Controller('subscription')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
export class SubscriptionController extends CrudController<Subscription> {
  constructor(private readonly subscriptionService: SubscriptionService) {
    super(subscriptionService);
  }

  @ApiOperation({ title: 'Find all Subscriptions. Admins only' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Find matching Subscriptions', type: SubscriptionList })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'No matching records found' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiUseTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get()
  async findAll(@Query() filter: FindSubscriptionsDto): Promise<SubscriptionList> {
    return this.subscriptionService.findAll(filter);
  }

  @ApiOperation({ title: 'find all user Subscriptions' })
  @ApiResponse({ status: HttpStatus.OK, description: 'All user Subscriptions', type: SubscriptionList })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'No matching records found' })
  @Get('own')
  async findOwn(@Query() filter: FindOwnSubscriptionsDto, @CurrentUser() user): Promise<SubscriptionList> {
    return this.subscriptionService.findOwn(filter, user);
  }

  @ApiOperation({ title: 'Find by id. Admins only' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: Subscription })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiUseTags('Admin')
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
    const { total, items } = await this.subscriptionService.findAll(
      new FindSubscriptionsDto({ endpoint: entity.endpoint }),
    );
    if (total === 0) {
      return super.create({ ...entity, username: user.username });
    } else {
      return items[0];
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
      return this.subscriptionService.update({ endpoint: id, username: user.username }, entity);
    } else {
      return this.subscriptionService.update({ id, username: user.username }, entity);
    }
  }

  @ApiOperation({ title: 'Delete record' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Delete(':id')
  async delete(@Param('id') id: string, @CurrentUser() user: User): Promise<any> {
    if (id.startsWith('http')) {
      return this.subscriptionService.delete({ endpoint: id, username: user.username });
    } else {
      return this.subscriptionService.delete({ id, username: user.username });
    }
  }
}
