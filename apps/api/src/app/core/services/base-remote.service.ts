import { HttpService } from '@nestjs/common/http';
import { AxiosError, AxiosResponse } from 'axios';
import { throwError } from 'rxjs';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';

export abstract class BaseRemoteService {
  protected abstract logger: Logger;
  protected abstract baseUrl: string;
  readonly timeout: number = 10000;

  protected constructor(protected http: HttpService) {}

  protected unwrapData(response: AxiosResponse<any>) {
    return response.data ? response.data : response;
  }

  handleError(error: AxiosError) {
    if (error.response) {
      // The backend returned an unsuccessful response code.
      // The server responded with a status code that falls out of the range of 2xx
      // The response body may contain clues as to what went wrong,
      this.logger.log(error.response.data);
      this.logger.log(error.response.status + '');
      console.log(error.response.headers);
      if (error.response.status === HttpStatus.NOT_FOUND) {
        return throwError(new NotFoundException(error.response.data));
      } else if (error.response.status === HttpStatus.BAD_REQUEST) {
        return throwError(new BadRequestException(error.response.data));
      } else {
        return throwError(new HttpException(error.response.data, error.response.status));
      }
    } else if (error.request) {
      // A client-side or network error occurred. Handle it accordingly.
      // `error.request` is an instance of http.ClientRequest in node.js
      this.logger.log('Error' + error.request);
      return throwError(new InternalServerErrorException(error.request));
    } else {
      // return throwError(error.message);
      return throwError('Something bad happened; please try again later.');
    }
  }

  protected getHeaders(json: boolean = true) {
    const headers = {};
    if (json) {
      headers['Content-Type'] = 'application/json';
    } else {
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return headers;
  }
}
