import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, catchError, finalize } from 'rxjs/operators';
import { EntityService } from '@nx-starter-kit/shared';
import { Account } from './account.model';

@Injectable()
export class AccountService extends EntityService<Account> {
  // Optionally overwrite baseUrl
  public baseUrl = environment.API_BASE_URL;

  readonly entityPath = 'accounts';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
