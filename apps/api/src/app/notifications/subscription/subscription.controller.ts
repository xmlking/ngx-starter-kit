import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@ngx-starter-kit/models';
import { CurrentUser, Roles, RolesEnum } from '../../auth/decorators';
import { CrudController } from '../../core';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { FindOwnSubscriptionsDto } from './dto/find-own-subscriptions.dto';
import { FindSubscriptionsDto } from './dto/find-subscriptions.dto';
import { SubscriptionList } from './dto/subscription-list.model';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from './subscription.entity';
import { SubscriptionService } from './subscription.service';

@ApiOAuth2(['read'])
@ApiTags('Subscription')
@Controller('subscription')
export class SubscriptionController extends CrudController<Subscription> {
  constructor(private readonly subscriptionService: SubscriptionService) {
    super(subscriptionService);
  }

  @ApiOperation({ summary: 'Find all Subscriptions. Admins only' })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get()
  async findAll(@Query() filter: FindSubscriptionsDto): Promise<SubscriptionList> {
    return this.subscriptionService.findAll(filter);
  }

  @ApiOperation({ summary: 'find all user Subscriptions' })
  @Get('own')
  async findOwn(@Query() filter: FindOwnSubscriptionsDto, @CurrentUser() user): Promise<SubscriptionList> {
    return this.subscriptionService.findOwn(filter, user);
  }

  @ApiOperation({ summary: 'Find by id. Admins only' })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Subscription> {
    return super.findById(id);
  }

  @ApiOperation({ summary: 'Create new record' })
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

  @ApiOperation({ summary: 'Update an existing record' })
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

  @ApiOperation({ summary: 'Delete record' })
  @Delete(':id')
  async delete(@Param('id') id: string, @CurrentUser() user: User): Promise<any> {
    if (id.startsWith('http')) {
      return this.subscriptionService.delete({ endpoint: id, username: user.username });
    } else {
      return this.subscriptionService.delete({ id, username: user.username });
    }
  }
}
