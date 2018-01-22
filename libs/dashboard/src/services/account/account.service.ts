import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../apps/default/src/environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Account } from '../../state/account/account.interfaces';

@Injectable()
export class AccountService {
  private accountsUrl = environment.API_BASE_URL + '/accounts';

  constructor(private http: HttpClient) {}

  list() /* : Observable<[Account]>*/ {
    return this.http.get<Account[]>(this.accountsUrl).catch(this.handleError);
  }

  get(id: number) {
    return this.http.get<Account>(`${this.accountsUrl}/${id}`).catch(this.handleError);
  }

  create(name: string) /*: Promise<Account> */ {
    return this.http
      .post<Account>(this.accountsUrl, JSON.stringify({ name: name }))
      .toPromise()
      .catch(this.handleErrorPromise);
  }

  update(account: Account) {
    const url = `${this.accountsUrl}/${account.id}`;
    return this.http
      .put(url, JSON.stringify(account))
      .toPromise()
      .then(() => account)
      .catch(this.handleErrorPromise);
  }

  delete(id: number): Promise<void> {
    const url = `${this.accountsUrl}/${id}`;
    return this.http
      .delete(url)
      .toPromise()
      .catch(this.handleErrorPromise);
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body: any = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  private handleErrorPromise(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
