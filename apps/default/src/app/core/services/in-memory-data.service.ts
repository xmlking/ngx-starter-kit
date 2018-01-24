import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
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

    return { accounts, symbols };
  }
}
