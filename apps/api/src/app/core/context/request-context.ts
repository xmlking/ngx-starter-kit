import { HttpException, HttpStatus } from '@nestjs/common';
import * as cls from 'cls-hooked';
import uuid from 'uuid';
import { User } from '../../auth';

export class RequestContext {
  public readonly id: number;
  public request: Request;
  public response: Response;

  constructor(request: Request, response: Response) {
    this.id = Math.random();
    this.request = request;
    this.response = response;
  }

  public static currentRequestContext(): RequestContext {
    const session = cls.getNamespace(RequestContext.name);
    if (session && session.active) {
      return session.get(RequestContext.name);
    }

    return null;
  }

  public static currentRequest(): Request {
    const requestContext = RequestContext.currentRequestContext();

    if (requestContext) {
      return requestContext.request;
    }

    return null;
  }

  public static currentUser(throwError?: boolean): User {
    const requestContext = RequestContext.currentRequestContext();

    if (requestContext) {
      // tslint:disable-next-line
      const user: any = requestContext.request['user'];
      if (user) {
        return user;
      }
    }

    if (throwError) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return null;
  }

  public static currentToken(throwError?: boolean): any {
    const requestContext = RequestContext.currentRequestContext();

    if (requestContext) {
      // tslint:disable-next-line
      return requestContext.request['token'];
    }

    if (throwError) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return null;
  }
}
