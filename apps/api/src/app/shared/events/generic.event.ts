import { IEvent } from '@nestjs/cqrs';
import { User } from '@ngx-starter-kit/models';

export class GenericEvent implements IEvent {
  constructor(public readonly type: string, public readonly payload: any, public readonly user: User) {}
}
