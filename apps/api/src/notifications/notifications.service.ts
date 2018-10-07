import { Injectable, NotFoundException } from '@nestjs/common';
import { CrudService } from '../core';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './notification.entity';
import { User } from '../auth';
import { EventBusGateway } from '../shared';
import { AddNotification, DeleteNotification } from './index';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationsService extends CrudService<Notification> {
  constructor(
    private readonly eventBus: EventBusGateway,
    @InjectRepository(Notification) private readonly notificationsRepository: Repository<Notification>,
  ) {
    super(notificationsRepository);
  }

  async onModuleInit() {
    this.eventBus.on(AddNotification.type, this.onAddNotification.bind(this));
    this.eventBus.on(DeleteNotification.type, this.onDeleteNotification.bind(this));
  }
  onModuleDestroy() {
    this.eventBus.off(AddNotification.type, this.onAddNotification.bind(this));
    this.eventBus.off(DeleteNotification.type, this.onDeleteNotification.bind(this));
  }

  public async getUserNotifications(user: User): Promise<[Notification[], number]> {
    const records = await this.repository.findAndCount({ userId: user.userId });
    if (records[1] === 0) {
      throw new NotFoundException(`The requested records were not found`);
    }
    return records;
  }

  notify(user: User, action: any) {
    this.eventBus.sendActionToUser(user, action);
  }
  notifyAll(action: any) {
    this.eventBus.sendActionToAll(action);
  }

  onAddNotification(action: AddNotification) {
    console.log('AddNotification', action);
  }

  // TODO: sync with database
  onDeleteNotification(action: DeleteNotification) {
    console.log('DeleteNotification', action);
  }
}
