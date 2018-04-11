import { Actions, ofAction, ofActionComplete, ofActionDispatched } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Login } from '@nx-starter-kit/auth';

@Injectable()
export class EventBus {
  constructor(private actions$: Actions) {
    this.actions$.pipe(ofActionDispatched(Login)).subscribe(action => console.log('Login.......Action Dispatched'));
    this.actions$.pipe(ofActionComplete(Login)).subscribe(action => console.log('Login........Action Completed'));
    // this.actions$.pipe(ofActionErrored(Login)).subscribe(action => console.log('Login........Action Errored'));
  }
}
