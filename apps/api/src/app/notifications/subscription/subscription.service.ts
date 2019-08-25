import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService, IPagination } from '../../core';
import { Subscription } from './subscription.entity';
import { FindConditions, Repository } from 'typeorm';
import { setVapidDetails } from 'web-push';
import { environment as env } from '@env-api/environment';
import { FindOwnSubscriptionsDto } from './dto/find-own-subscriptions.dto';
import { FindSubscriptionsDto } from './dto/find-subscriptions.dto';
import { User } from '@ngx-starter-kit/models';

@Injectable()
export class SubscriptionService extends CrudService<Subscription> {
  private readonly logger = new Logger(SubscriptionService.name);

  constructor(@InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>) {
    super(subscriptionRepository);
    setVapidDetails(env.webPush.subject, env.webPush.publicKey, env.webPush.privateKey);
  }

  async findAll({ take, skip, order, ...where }: FindSubscriptionsDto): Promise<IPagination<Subscription>> {
    return super.findAll({ where, take, skip, order });
  }

  async findOwn({ take, skip, order }: FindOwnSubscriptionsDto, actor: User): Promise<IPagination<Subscription>> {
    const criteria = new FindSubscriptionsDto({ username: actor.username, take, skip, order });
    console.log('findOwn criteria', criteria);
    return super.findAll(criteria);
  }

  // async findAndCount(conditions?: FindConditions<Subscription>): Promise<[Subscription[], number]> {
  //   return this.subscriptionRepository.findAndCount(conditions);
  // }
  //
  // async find(conditions?: FindConditions<Subscription>): Promise<Subscription[]> {
  //   return this.subscriptionRepository.find(conditions);
  // }

  async getUserSubscriptions(user: User): Promise<[Subscription[], number]> {
    const records = await this.repository.findAndCount({ username: user.username });
    if (records[1] === 0) {
      throw new NotFoundException(`The requested records were not found`);
    }
    return records;
  }

  async findOne(id: string | number | FindConditions<Subscription>): Promise<Subscription> {
    if (typeof id === 'string' && id.startsWith('http')) {
      return super.findOne({ endpoint: id });
    } else {
      return super.findOne(id);
    }
  }
}
