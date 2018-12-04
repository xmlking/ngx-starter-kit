import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared';
import { NotificationController } from './notification/notification.controller';
import { NotificationService } from './notification/notification.service';
import { SubscriptionController } from './subscription/subscription.controller';
import { SubscriptionService } from './subscription/subscription.service';
import { PushService } from './notification/push.service';
import { Notification } from './notification/notification.entity';
import { Subscription } from './subscription/subscription.entity';

@Module({
  // imports: [SharedModule, TypeOrmModule.forFeature([NotificationsRepository])],
  imports: [SharedModule, TypeOrmModule.forFeature([Notification, Subscription])],
  providers: [PushService, SubscriptionService, NotificationService],
  controllers: [NotificationController, SubscriptionController],
})
export class NotificationsModule {}
