import { Body, Controller, Delete, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CrudController } from '../core';
import { CurrentUser, User } from '../auth';
import { Subscription } from './subscription.entity';
import { PushService } from './push.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SendNotificationDto } from './dto/send-notification.dto';

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
    const records = await this.pushService.findAndCount({ endpoint: entity.endpoint });
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
      return this.pushService.update({ endpoint: id }, entity);
    } else {
      return this.pushService.update(id, entity);
    }
  }

  @ApiOperation({ title: 'Delete record' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Delete(':id')
  async delete(@Param('id') id: string, @CurrentUser() user: User): Promise<any> {
    if (id.startsWith('http')) {
      return this.pushService.delete({ endpoint: id });
    } else {
      return this.pushService.delete(id);
    }
  }

  @ApiOperation({ title: 'Send Push Notification' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Push Notification has been successfully sent.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @Post('notify')
  notify(@Body() notif: SendNotificationDto) {
    const notification = {
      title: 'NGX WebApp Notification',
      body: notif.body,
      icon: 'assets/icons/icon-72x72.png',
      data: {
        click_url: '/dashboard',
      },
    };
    return this.pushService.notify(notif.id, notification as any);
  }
}
