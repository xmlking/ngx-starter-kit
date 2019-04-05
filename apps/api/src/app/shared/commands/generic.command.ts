import { ICommand } from '@nestjs/cqrs';
import { User } from '@ngx-starter-kit/models';

export class GenericCommand implements ICommand {
  constructor(public readonly type: string, public readonly payload: any, public readonly user: User) {}
}
