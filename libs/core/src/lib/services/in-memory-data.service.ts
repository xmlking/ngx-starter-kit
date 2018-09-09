import {
  InMemoryDbService,
  ParsedRequestUrl,
  RequestInfo,
  RequestInfoUtilities,
  ResponseOptions,
} from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

// /api/accounts/1
// /api/symbols/1
// https://github.com/angular/in-memory-web-api/blob/master/src/app/hero-in-mem-data.service.ts
// https://github.com/angular/in-memory-web-api/blob/master/src/app/hero-in-mem-data-override.service.ts
@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  async createDb() {
    const response = await fetch('assets/data/accounts.json');
    const accounts = await response.json();

    const notificationsResponse = await fetch('assets/data/notifications.json');
    const notifications = await notificationsResponse.json();

    const symbols = [
      {
        id: 1,
        code: 'MSFT',
        entity: 'Microsoft',
      },
      {
        id: 2,
        code: 'AAPL',
        entity: 'Apple',
      },
      {
        id: 3,
        code: 'GOOG',
        entity: 'Google',
      },
    ];

    return { accounts, symbols, notifications };
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const newUrl = url
      .replace(/\/datapower\/serviceproxy/, '/serviceproxy')
      .replace(/\/nas\/cluster/, '/cluster')
      .replace(/\/layer7\/my.cnf/, '/mycnf');

    const parsed = utils.parseRequestUrl(newUrl);
    // console.log(`parseRequestUrl override of '${url}':`, parsed);
    // console.log(`parseRequestUrl override of '${url}':`, `new: ${newUrl}`);
    return parsed;
  }
}
