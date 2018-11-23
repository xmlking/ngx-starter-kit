import { HttpException, HttpStatus } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';

export const createExceptionBody = (message: any, error: string, statusCode: number) =>
  message ? { statusCode, error, message } : { statusCode, error };

export class HttpAuthException extends HttpException {
  constructor(message, error) {
    super(createExceptionBody(message, error, HttpStatus.UNAUTHORIZED), HttpStatus.UNAUTHORIZED);
  }
}

export class WsAuthException extends WsException {
  constructor(message, error) {
    super(createExceptionBody(message, error, HttpStatus.UNAUTHORIZED));
  }
}
