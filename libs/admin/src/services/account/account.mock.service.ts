import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountMockService implements InMemoryDbService {
  async createDb() {
    const response = await fetch('assets/data/accounts.json');
    const accounts = await response.json();

    return { accounts };
  }

  // intercept response from the default HTTP method handlers
  responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo) {
    const method = reqInfo.method.toUpperCase();
    const body = JSON.stringify(resOptions);

    console.log(`responseInterceptor: ${method} ${reqInfo.req.url}: \n${body}`);
    return resOptions;
  }
}
