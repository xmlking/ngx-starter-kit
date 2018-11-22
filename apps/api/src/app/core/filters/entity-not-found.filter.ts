import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from '@nestjs/common';

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, _host: ArgumentsHost) {
    throw new NotFoundException(exception.message);
  }
}
