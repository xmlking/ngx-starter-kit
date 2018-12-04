import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CrudController } from '../../core';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags, ApiExcludeEndpoint } from '@nestjs/swagger';
import { Notification, TargetType } from './notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationService } from './notification.service';
import { CurrentUser, Roles, RolesEnum, User } from '../../auth';
import { DeepPartial } from 'typeorm';
import { SendNotificationDto } from './dto/send-notification.dto';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Sumo', 'Notifications')
@Controller('notifications')
export class NotificationController extends CrudController<Notification> {
  constructor(private readonly notificationService: NotificationService) {
    super(notificationService);
  }

  @ApiOperation({ title: 'find all Notifications. Admins only' })
  @ApiResponse({ status: HttpStatus.OK, description: 'All Notifications', /* type: Notification, */ isArray: true })
  @ApiUseTags('admin')
  @Roles(RolesEnum.ADMIN)
  @Get()
  async findAll(): Promise<[Notification[], number]> {
    return this.notificationService.getAll();
  }

  @ApiOperation({ title: 'find all user and global Notifications' })
  @ApiResponse({ status: HttpStatus.OK, description: 'All user Notifications', /* type: Notification, */ isArray: true })
  @Get('user')
  async getUserNotifications(@CurrentUser() user): Promise<[Notification[], number]> {
    return this.notificationService.getUserNotifications(user);
  }

  @ApiOperation({ title: 'Find by id. Admins only' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: Notification })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiUseTags('admin')
  @Roles(RolesEnum.ADMIN)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Notification> {
    return super.findById(id);
  }

  @ApiOperation({ title: 'Create new record. Admins only' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
    type: Notification,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @ApiUseTags('admin')
  @Roles(RolesEnum.ADMIN)
  @Post()
  async create(@Body() entity: CreateNotificationDto): Promise<Notification> {
    return super.create(entity);
  }

  @ApiExcludeEndpoint() // TODO
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() entity: DeepPartial<Notification>,
    @CurrentUser() user: User,
  ): Promise<any> {
    return this.notificationService.update(id, entity);
  }

  @ApiOperation({ title: 'Delete record by admin' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiUseTags('admin')
  @Roles(RolesEnum.ADMIN)
  @Delete('deleteByAdmin/:id')
  async deleteByAdmin(@Param('id') id: string): Promise<any> {
    return this.notificationService.update({ id: parseInt(id, 10) }, { isActive: false });
  }

  @ApiOperation({ title: 'Delete record by user' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @Delete(':id')
  async delete(@Param('id') id: string, @CurrentUser() user: User): Promise<any> {
    return this.notificationService.update(
      { id: parseInt(id, 10), targetType: TargetType.USER, target: user.userId },
      { isActive: false },
    );
  }

  @ApiOperation({ title: 'Send Push Notifications. Admins only' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Push Notifications has been successfully sent.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @ApiUseTags('admin')
  @Roles(RolesEnum.ADMIN)
  @Post('send')
  async send(@Body() notif: SendNotificationDto) {
    return this.notificationService.send(notif.id);
  }
}
