import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CrudController } from '../core';
import { Subscription } from './subscription.entity';
import { PushService } from './push.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { CurrentUser, User } from '../auth';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Sumo', 'Push')
@Controller()
export class PushController extends CrudController<Subscription> {
  constructor(private readonly pushService: PushService) {
    super(pushService);
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
    return super.create({ ...entity, userId: user.userId });
  }
}
