import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CrudController } from '../core';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@xmlking/swagger';
import { Notification } from './notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationsService } from './notifications.service';
import { CurrentUser, Roles, RolesEnum } from '../auth';
import { AddNotification } from './interfaces/notification.actions';
import * as uuid from 'uuid';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Sumo', 'Notifications')
@Controller()
export class NotificationsController extends CrudController<Notification> {
  constructor(private readonly notificationsService: NotificationsService) {
    super(notificationsService);
  }

  @ApiOperation({ title: 'find all user Notifications' })
  @ApiResponse({ status: HttpStatus.OK, description: 'All user Notifications', /* type: T, */ isArray: true })
  @Get()
  async findAll(@CurrentUser() user): Promise<[Notification[], number]> {
    return this.notificationsService.getUserNotifications(user);
  }

  @ApiOperation({ title: 'Create new record' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
    type: Notification,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @Post()
  async create(@Body() entity: CreateNotificationDto): Promise<Notification> {
    return super.create(entity);
  }

  // TODO: add to database for offline users and also show to active users
  @ApiOperation({ title: 'Notify User' })
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Accepted' })
  @Roles(RolesEnum.USER)
  @Post('/notify')
  @HttpCode(HttpStatus.ACCEPTED)
  notify(@Body() notif: CreateNotificationDto, @CurrentUser() user) {
    this.notificationsService.notify(
      user,
      new AddNotification({
        id: uuid(),
        icon: notif.icon,
        message: notif.message,
        createdAt: new Date(),
        read: notif.read,
        color: notif.color,
      }),
    );
  }

  // TODO: add to database for offline users and also show to active users
  @ApiOperation({ title: 'Notify All' })
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Accepted' })
  @Roles(RolesEnum.ADMIN)
  @Post('/notifyAll')
  @HttpCode(HttpStatus.ACCEPTED)
  notifyAll(@Body() notif: CreateNotificationDto) {
    const date = new Date();
    this.notificationsService.notifyAll(
      new AddNotification({
        id: uuid(),
        icon: notif.icon,
        message: notif.message,
        createdAt: date.setTime(date.getTime() - 2 * 86400000),
        read: notif.read,
        color: notif.color,
      }),
    );
  }
}
