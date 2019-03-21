import {
  BadRequestException,
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment as env } from '@env-api/environment';

import { BaseRemoteService } from '../../core';
import { CacheService, Cache } from '../../cache';

@Injectable()
export class WeatherService extends BaseRemoteService {
  readonly logger = new Logger(WeatherService.name);
  readonly baseUrl = env.weather.baseUrl;
  readonly timeout = 10000;

  constructor(http: HttpService, private cacheService: CacheService) {
    super(http);
  }

  getWeatherByZip(zip: string, countryCode: string = 'us'): Observable<any> {
    return this.http.get(`${this.baseUrl}/weather?zip=${zip},${countryCode}&appid=${env.weather.apiKey}`, this.getHeaders()).pipe(
      tap(res => this.logger.log(`Status: ${res.status}`)),
      map(res => res.data ),
      catchError(this.handleError),
    );
  }

  // 5 day / 3 hour forecast data
  @Cache<any>({ ttl: 60 * 60 * 3})
  getForecastByZip(zip: string, countryCode: string = 'us'): Observable<any> {
    return this.http.get(`${this.baseUrl}/forecast?zip=${zip},${countryCode}&appid=${env.weather.apiKey}`, this.getHeaders()).pipe(
      tap(res => this.logger.log(`Status: ${res.status}`)),
      map(res => res.data ),
      catchError(this.handleError),
    );
  }

  getHeaders() {
    return {
      headers: { Authorization: `Basic ${env.weather.apiKey}` },
      timeout: this.timeout,
    };
  }

  handleError(error: AxiosError) {
    if (error.response) {
      if (error.response.status === HttpStatus.NOT_FOUND) {
        return throwError(new NotFoundException(error.response.data));
      } else if (error.response.status === HttpStatus.BAD_REQUEST) {
        return throwError(new BadRequestException(error.response.data));
      } else {
        return throwError(new HttpException(error.response.data, error.response.status));
      }
    } else {
      return throwError(error.message);
    }
  }
}
