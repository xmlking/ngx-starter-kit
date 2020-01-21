import { Injectable } from '@angular/core';
import {
  getStatusText,
  InMemoryDbService,
  ParsedRequestUrl,
  RequestInfo,
  RequestInfoUtilities,
  ResponseOptions,
  STATUS
} from 'angular-in-memory-web-api';

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

    const subscriptionResponse = await fetch('assets/data/subscription.json');
    const subscription = await subscriptionResponse.json();

    const symbols = [
      {
        id: 1,
        code: 'MSFT',
        entity: 'Microsoft'
      },
      {
        id: 2,
        code: 'AAPL',
        entity: 'Apple'
      },
      {
        id: 3,
        code: 'GOOG',
        entity: 'Google'
      }
    ];

    return { accounts, symbols, notifications, subscription };
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const newUrl = url
      .replace(/\/notifications\/own/, '/notifications')
      .replace(/\/datapower\/serviceproxy/, '/serviceproxy')
      .replace(/\/nas\/cluster/, '/cluster')
      .replace(/\/layer7\/my.cnf/, '/mycnf');

    const parsed = utils.parseRequestUrl(newUrl);
    // console.log(`parseRequestUrl override of '${url}':`, parsed);
    // console.log(`parseRequestUrl override of '${url}':`, `new: ${newUrl}`);
    return parsed;
  }

  put(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'accounts') {
      (reqInfo.req as any).body = { id: reqInfo.id, ...(reqInfo.req as any).body };
    } else if (collectionName === 'notifications' || collectionName === 'subscription') {
      reqInfo.collection[0].map(item => {
        if (item.id === reqInfo.id) {
          return { id: reqInfo.id, ...(reqInfo.req as any).body };
        }
        return item;
      });
      const options: ResponseOptions = {
        status: STATUS.ACCEPTED
      };
      return reqInfo.utils.createResponse$(() => {
        return this.finishOptions(options, reqInfo);
      });
    } else {
      return undefined; // let the default PUT handle all others
    }
  }

  post(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'notifications' || collectionName === 'subscription') {
      reqInfo.collection[0].push((reqInfo.req as any).body);
      reqInfo.collection[1] = reqInfo.collection[1] + 1;
      const options: ResponseOptions = {
        status: STATUS.CREATED
      };
      return reqInfo.utils.createResponse$(() => {
        return this.finishOptions(options, reqInfo);
      });
    } else {
      return undefined; // let the default POST handle all others
    }
  }

  private finishOptions(options: ResponseOptions, { headers, url }: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
}
