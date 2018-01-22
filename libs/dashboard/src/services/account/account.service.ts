import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../apps/default/src/environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import { Account } from '../../state/account/account.interfaces';

@Injectable()
export class AccountService {
  private accountsUrl = environment.API_BASE_URL + '/accounts';

  constructor(private http: HttpClient) {}

  list() /*: Observable<[Account]>*/ {
    return this.http
      .get<Account[]>(this.accountsUrl)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  get(id: number): Observable<Account> {
    return this.http
      .get<Account>(`${this.accountsUrl}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  create(name: string): Observable<Account> {
    return this.http
      .post<Account>(this.accountsUrl, { name: name })
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  update(payload: Account): Observable<Account> {
    return this.http
      .put(`${this.accountsUrl}/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  delete(payload: Account): Observable<Account> {
    return this.http
      .delete<any>(`${this.accountsUrl}/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
