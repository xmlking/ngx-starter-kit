import {
  InMemoryDbService,
  ParsedRequestUrl,
  RequestInfo,
  RequestInfoUtilities,
  ResponseOptions
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

    const serviceProxyResponse = await fetch('assets/data/datapower/serviceproxy.json');
    const serviceproxy = await serviceProxyResponse.json();

    const clusterResponse = await fetch('assets/data/nas/cluster.json');
    const cluster = await clusterResponse.json();

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

    return { accounts, symbols, serviceproxy, cluster };
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const newUrl = url
      .replace(/\/datapower\/serviceproxy/, '/serviceproxy')
      .replace(/\/nas\/cluster/, '/cluster');

    // console.log('newUrl', newUrl);
    const parsed = utils.parseRequestUrl(newUrl);
    console.log(`parseRequestUrl override of '${url}':`, parsed);
    return parsed;
  }
}
