import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PushSubscription, sendNotification, setVapidDetails, WebPushError } from 'web-push';
import { environment as env } from '@env-api/environment';
import { SubscriptionService } from '../subscription/subscription.service';

@Injectable()
export class PushService {
  private readonly logger = new Logger(PushService.name);

  constructor(private readonly subscriptionService: SubscriptionService) {
    setVapidDetails(env.webPush.subject, env.webPush.publicKey, env.webPush.privateKey);
  }

  async sendNotification(subscription: PushSubscription, notification: Notification) {
    try {
      await sendNotification(subscription, JSON.stringify({ notification }));
    } catch (err /*err is WebPushError*/) {
      const error = err as WebPushError;
      if (error.statusCode === 410) {
        // delete orphaned subscriptions
        this.logger.log('deleted orphaned subscription', error.message);
        await this.subscriptionService.delete({ endpoint: subscription.endpoint });
      } else {
        this.logger.log('send push notification failed', error.message);
      }
      throw new BadRequestException(err);
    }
  }
}
