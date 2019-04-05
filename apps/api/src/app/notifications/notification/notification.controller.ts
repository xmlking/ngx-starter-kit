import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { CrudController } from '../../core';
import { ApiExcludeEndpoint, ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { Notification } from './notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationService } from './notification.service';
import { CurrentUser, Roles, RolesEnum } from '../../auth';
import { SendNotificationDto } from './dto/send-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationList } from './dto/notification-list.model';
import { FindNotificationsDto } from './dto/find-notifications.dto';
import { FindOwnNotificationsDto } from './dto/find-own-notifications.dto';
import { User } from '@ngx-starter-kit/models';
import { UUIDValidationPipe } from '../../shared';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Notifications')
@Controller('notifications')
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
export class NotificationController extends CrudController<Notification> {
  constructor(private readonly notificationService: NotificationService) {
    super(notificationService);
  }

  @ApiOperation({ title: 'Find all Notifications. Admins only' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Find matching Notifications', type: NotificationList })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'No matching records found' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiUseTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get()
  async findAll(@Query() filter: FindNotificationsDto): Promise<NotificationList> {
    // return super.findAll(filter);
    return this.notificationService.findAll(filter);
  }

  @ApiOperation({ title: "find user's and global Notifications" })
  @ApiResponse({ status: HttpStatus.OK, description: 'Find matching Notifications', type: NotificationList })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'No matching records found' })
  @Get('own')
  async findOwn(@Query() filter: FindOwnNotificationsDto, @CurrentUser() user): Promise<NotificationList> {
    return this.notificationService.findOwn(filter, user);
  }

  @ApiOperation({ title: 'Find by id. Admins only' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Found one record', type: Notification })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiUseTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get(':id')
  async findById(@Param('id', UUIDValidationPipe) id: string): Promise<Notification> {
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
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiUseTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Post()
  async create(@Body() entity: CreateNotificationDto): Promise<Notification> {
    return super.create(entity);
  }

  @ApiExcludeEndpoint()
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiUseTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() entity: UpdateNotificationDto,
    @CurrentUser() user: User,
  ): Promise<any> {
    return this.notificationService.update(id, entity);
  }

  @ApiOperation({ title: 'Delete record by admin' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiUseTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Delete(':id')
  async deleteByAdmin(@Param('id') id: string): Promise<any> {
    return this.notificationService.update(id, { isActive: false });
  }

  // @ApiOperation({ title: 'Delete record by user' })
  // @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'The record has been successfully deleted' })
  // @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Record not found' })
  // @Delete('deleteByUser/:id')
  // async delete(@Param('id') id: string, @CurrentUser() user: User): Promise<any> {
  //   return this.notificationService.update(
  //     { id: parseInt(id, 10), targetType: TargetType.USER, target: user.username },
  //     { isActive: false },
  //   );
  // }

  @ApiOperation({ title: 'Send Push Notifications. Admins only' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Push Notifications has been successfully sent.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input, The response body may contain clues as to what went wrong',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiUseTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Post('send')
  async send(@Body() notif: SendNotificationDto) {
    return this.notificationService.send(notif.id);
  }
}
