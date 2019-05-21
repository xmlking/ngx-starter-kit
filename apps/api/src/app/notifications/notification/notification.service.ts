import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, In, Repository } from 'typeorm';
import { CrudService, IPagination } from '../../core';
import { Notification, TargetType } from './notification.entity';
import { CQRSGateway } from '../../shared';
import { SubscriptionService } from '../subscription/subscription.service';
import { PushService } from './push.service';
import { Subscription } from '../subscription/subscription.entity';
import { FindOwnNotificationsDto } from './dto/find-own-notifications.dto';
import { FindNotificationsDto } from './dto/find-notifications.dto';
import { User } from '@ngx-starter-kit/models';
import { NotificationsDeleteCommand, NotificationsMarkAsReadCommand } from './commands';

@Injectable()
export class NotificationService extends CrudService<Notification> implements OnModuleInit, OnModuleDestroy {
  readonly logger = new Logger(NotificationService.name);
  constructor(
    private readonly pushService: PushService,
    private readonly cqrsGateway: CQRSGateway,
    private readonly subscriptionService: SubscriptionService,
    @InjectRepository(Notification) private readonly notificationsRepository: Repository<Notification>,
    @InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>,
  ) {
    super(notificationsRepository);
  }

  onModuleInit() {}

  onModuleDestroy() {}

  async findAll({ take, skip, order, ...where }: FindNotificationsDto): Promise<IPagination<Notification>> {
    return super.findAll({ where, take, skip, order });
  }

  async findOwn({ take, skip, order }: FindOwnNotificationsDto, actor: User): Promise<IPagination<Notification>> {
    const where = { isActive: true, target: In(['all', actor.username]) };
    return super.findAll({ where, take, skip, order });
  }

  async send(id: string) {
    const notification = await this.findOne(id);

    const pushNotification = {
      title: notification.title,
      body: notification.body,
      icon: 'assets/icons/icon-72x72.png',
      data: notification,
      vibrate: [200, 100, 200],
    };

    let subscriptions: Subscription[];
    switch (notification.targetType) {
      case TargetType.USER:
        subscriptions = await this.subscriptionRepository.find({ where: { username: notification.target } });
        break;
      case TargetType.TOPIC:
        // FIXME: https://github.com/typeorm/typeorm/issues/3150
        subscriptions = await this.subscriptionRepository.find({
          where: { topics: Any([notification.target]) },
        });
        break;
      case TargetType.ALL:
        subscriptions = await this.subscriptionRepository.find({ take: 10 }); // TODO: for now, lets send to 10
        break;
    }
    subscriptions.forEach(subscription => {
      const { endpoint, p256dh, auth } = subscription;
      return this.pushService.sendNotification({ endpoint, keys: { p256dh, auth } }, pushNotification as any);
    });
  }

  async onMarkAsRead(command: NotificationsMarkAsReadCommand) {
    await this.update(
      { id: command.payload.id, targetType: TargetType.USER, target: command.user.username },
      { read: true },
    );
  }

  async onMarkAllAsRead(command: NotificationsMarkAsReadCommand) {
    await this.update(
      { targetType: TargetType.USER, target: command.user.username },
      { read: true },
    );
  }

  async onDeleteNotification(command: NotificationsDeleteCommand) {
    await this.update(
      { id: command.payload.id, targetType: TargetType.USER, target: command.user.username },
      { isActive: false },
    );
  }
}
