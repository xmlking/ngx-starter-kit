import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared';

import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { NotificationsRepository } from './notifications.repository';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([NotificationsRepository])],
  providers: [NotificationsService],
  controllers: [NotificationsController],
})
export class NotificationsModule {}
