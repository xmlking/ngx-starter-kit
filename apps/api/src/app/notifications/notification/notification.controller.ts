import { Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@ngx-starter-kit/models';
import { CurrentUser, Roles, RolesEnum } from '../../auth';
import { CrudController } from '../../core';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { FindNotificationsDto } from './dto/find-notifications.dto';
import { FindOwnNotificationsDto } from './dto/find-own-notifications.dto';
import { NotificationList } from './dto/notification-list.model';
import { SendNotificationDto } from './dto/send-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';

@ApiOAuth2(['read'])
@ApiTags('Notifications')
@Controller('notifications')
export class NotificationController extends CrudController<Notification> {
  constructor(private readonly notificationService: NotificationService) {
    super(notificationService);
  }

  @ApiOperation({ summary: 'Find all Notifications. Admins only' })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get()
  async findAll(@Query() filter: FindNotificationsDto): Promise<NotificationList> {
    // return super.findAll(filter);
    return this.notificationService.findAll(filter);
  }

  @ApiOperation({ summary: "find user's and global Notifications" }) // tslint:disable-line
  @Get('own')
  async findOwn(@Query() filter: FindOwnNotificationsDto, @CurrentUser() user): Promise<NotificationList> {
    return this.notificationService.findOwn(filter, user);
  }

  @ApiOperation({ summary: 'Find by id. Admins only' })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string): Promise<Notification> {
    return super.findById(id);
  }

  @ApiOperation({ summary: 'Create new record. Admins only' })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Post()
  async create(@Body() entity: CreateNotificationDto): Promise<Notification> {
    return super.create(entity);
  }

  @ApiExcludeEndpoint()
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() entity: UpdateNotificationDto,
    @CurrentUser() user: User,
  ): Promise<any> {
    return this.notificationService.update(id, entity);
  }

  @ApiOperation({ summary: 'Delete record by admin' })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Delete(':id')
  async deleteByAdmin(@Param('id') id: string): Promise<any> {
    return this.notificationService.update(id, { isActive: false });
  }

  // @ApiOperation({ summary: 'Delete record by user' })
  // @Delete('deleteByUser/:id')
  // async delete(@Param('id') id: string, @CurrentUser() user: User): Promise<any> {
  //   return this.notificationService.update(
  //     { id: parseInt(id, 10), targetType: TargetType.USER, target: user.username },
  //     { isActive: false },
  //   );
  // }

  @ApiOperation({ summary: 'Send Push Notifications. Admins only' })
  @ApiTags('Admin')
  @Roles(RolesEnum.ADMIN)
  @Post('send')
  async send(@Body() notif: SendNotificationDto) {
    return this.notificationService.send(notif.id);
  }
}
