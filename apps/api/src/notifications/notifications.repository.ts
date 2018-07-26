import { AuditMongoRepository } from '../core';
import { Notification } from './notification.entity';
import { EntityRepository } from 'typeorm';

@EntityRepository(Notification)
export class NotificationsRepository extends AuditMongoRepository<Notification> {}
