import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PushSubscription, sendNotification, setVapidDetails, WebPushError } from 'web-push';
import { CrudService } from '../core';
import { Any, FindConditions, Repository } from 'typeorm';
import { Subscription } from './subscription.entity';
import { environment as env } from '@env-api/environment';

@Injectable()
export class PushService extends CrudService<Subscription> {
  private readonly logger = new Logger(PushService.name);

  constructor(@InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>) {
    super(subscriptionRepository);
    setVapidDetails(env.webPush.subject, env.webPush.publicKey, env.webPush.privateKey);
  }
  async findAndCount(conditions?: FindConditions<Subscription>): Promise<[Subscription[], number]> {
    return this.subscriptionRepository.findAndCount(conditions);
  }

  async getOne(id: string | number | FindConditions<Subscription>): Promise<Subscription> {
    if (typeof id === 'string' && id.startsWith('http')) {
      return super.getOne({ endpoint: id });
    } else {
      return super.getOne(id);
    }
  }

  async notify(id: string | number, notification: Notification) {
    const { endpoint, p256dh, auth } = await this.getOne(id);
    return this._sendNotification({ endpoint, keys: { p256dh, auth } }, notification);
  }

  async notifyAll(topic: string, notification: Notification) {
    // FIXME: https://github.com/typeorm/typeorm/issues/3150
    const subscriptions = await this.findAndCount({ topics: Any([topic]) } );
    // console.log(subscriptions);
    if (subscriptions[1] > 0) {
      subscriptions[0].forEach( sub => {
        const { endpoint, p256dh, auth } = sub;
        this._sendNotification({ endpoint, keys: { p256dh, auth } }, notification);
      });
    }
  }

  private async _sendNotification(subscription: PushSubscription, notification: Notification) {
    try {
      await sendNotification(subscription, JSON.stringify({ notification }));
    } catch (err /*err is WebPushError*/) {
      const error = err as WebPushError;
      if (error.statusCode === 410) {
        // delete orphaned subscriptions
        this.logger.log('deleted orphaned subscription', error.message);
        await super.delete({ endpoint: subscription.endpoint });
      } else {
        this.logger.log('send push notification failed', error.message);
      }
      throw new BadRequestException(err);
    }
  }
}
