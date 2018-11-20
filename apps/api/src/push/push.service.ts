import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '../core';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';

@Injectable()
export class PushService extends CrudService<Subscription> {
  constructor(@InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>) {
    super(subscriptionRepository);
  }
}
