import {
  Injectable,
  Logger,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, In, Repository } from 'typeorm';
import { CrudService, IPagination } from '../../core';
import { Notification, TargetType } from './notification.entity';
import { EventBusGateway } from '../../shared';
import { DeleteNotification, MarkAsRead } from '../index';
import { User } from '../../auth';
import { SubscriptionService } from '../subscription/subscription.service';
import { PushService } from './push.service';
import { Subscription } from '../subscription/subscription.entity';
import { FindOwnNotificationsDto } from './dto/find-own-notifications.dto';
import { FindNotificationsDto } from './dto/find-notifications.dto';

@Injectable()
export class NotificationService extends CrudService<Notification>
  implements OnModuleInit, OnModuleDestroy, OnApplicationBootstrap, OnApplicationShutdown {
  readonly logger = new Logger(NotificationService.name);
  constructor(
    private readonly pushService: PushService,
    private readonly eventBus: EventBusGateway,
    private readonly subscriptionService: SubscriptionService,
    @InjectRepository(Notification) private readonly notificationsRepository: Repository<Notification>,
    @InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>,
  ) {
    super(notificationsRepository);
  }

  async onApplicationBootstrap(): Promise<void> {
    // DO some async task
    this.logger.log('in ApplicationBootstrap, done');
  }

  onApplicationShutdown(signal: string) {
    console.log('in onApplicationShutdown, signal: ', signal); // e.g. "SIGINT"
    // process.kill(process.pid, 'SIGINT');
  }

  onModuleInit() {
    this.eventBus.on(MarkAsRead.type, this.onMarkAsRead.bind(this));
    this.eventBus.on(DeleteNotification.type, this.onDeleteNotification.bind(this));
  }

  onModuleDestroy() {
    this.eventBus.off(MarkAsRead.type, this.onMarkAsRead.bind(this));
    this.eventBus.off(DeleteNotification.type, this.onDeleteNotification.bind(this));
  }

  async findAll({ take, skip, order, ...where }: FindNotificationsDto): Promise<IPagination<Notification>> {
    return super.findAll({ where, take, skip, order });
  }

  async findOwn({ take, skip, order }: FindOwnNotificationsDto, actor: User): Promise<IPagination<Notification>> {
    const criteria = new FindNotificationsDto({
      target: In(['all', actor.username]),
      isActive: true,
      take,
      skip,
      order,
    });
    return super.findAll(criteria);
  }

  async send(id: string | number) {
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

  async onMarkAsRead(action: MarkAsRead, user: User) {
    await this.update(
      { id: parseInt(action.payload.id, 10), targetType: TargetType.USER, target: user.username },
      { read: true },
    );
  }
  async onDeleteNotification(action: DeleteNotification, user: User) {
    await this.update(
      { id: parseInt(action.payload.id, 10), targetType: TargetType.USER, target: user.username },
      { isActive: false },
    );
  }
}
