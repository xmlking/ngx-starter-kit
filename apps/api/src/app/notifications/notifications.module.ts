import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { SharedModule } from '../shared';
import { NotificationController } from './notification/notification.controller';
import { NotificationService } from './notification/notification.service';
import { CommandHandlers } from './notification/commands/handlers';
import { SubscriptionController } from './subscription/subscription.controller';
import { SubscriptionService } from './subscription/subscription.service';
import { PushService } from './notification/push.service';
import { Notification } from './notification/notification.entity';
import { Subscription } from './subscription/subscription.entity';

@Module({
  imports: [SharedModule, CqrsModule, TypeOrmModule.forFeature([Notification, Subscription])],
  providers: [PushService, SubscriptionService, NotificationService, ...CommandHandlers],
  controllers: [NotificationController, SubscriptionController],
})
export class NotificationsModule {}
