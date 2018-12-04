import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '../../core';
import { Subscription } from './subscription.entity';
import { FindConditions, Repository } from 'typeorm';
import { setVapidDetails } from 'web-push';
import { environment as env } from '@env-api/environment';
import { User } from '../../auth';

@Injectable()
export class SubscriptionService extends CrudService<Subscription> {
  private readonly logger = new Logger(SubscriptionService.name);

  constructor(@InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>) {
    super(subscriptionRepository);
    setVapidDetails(env.webPush.subject, env.webPush.publicKey, env.webPush.privateKey);
  }

  async findAndCount(conditions?: FindConditions<Subscription>): Promise<[Subscription[], number]> {
    return this.subscriptionRepository.findAndCount(conditions);
  }

  async find(conditions?: FindConditions<Subscription>): Promise<Subscription[]> {
    return this.subscriptionRepository.find(conditions);
  }

  public async getUserSubscriptions(user: User): Promise<[Subscription[], number]> {
    const records = await this.repository.findAndCount({ userId: user.userId });
    if (records[1] === 0) {
      throw new NotFoundException(`The requested records were not found`);
    }
    return records;
  }

  async getOne(id: string | number | FindConditions<Subscription>): Promise<Subscription> {
    if (typeof id === 'string' && id.startsWith('http')) {
      return super.getOne({ endpoint: id });
    } else {
      return super.getOne(id);
    }
  }
}
