import { Actions, ofActionSuccessful, ofActionErrored, ofActionDispatched } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Login } from '@nx-starter-kit/auth';

@Injectable()
export class EventBus {
  constructor(private actions$: Actions) {
    this.actions$.pipe(ofActionDispatched(Login)).subscribe(action => console.log('Login.......Action Dispatched'));
    this.actions$.pipe(ofActionSuccessful(Login)).subscribe(action => console.log('Login........Action Successful'));
    this.actions$.pipe(ofActionErrored(Login)).subscribe(action => console.log('Login........Action Errored'));
  }
}
