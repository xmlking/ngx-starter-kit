import { Actions, ofAction } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Login } from '@nx-starter-kit/auth';

@Injectable()
export class EventBus {
  constructor(private actions$: Actions) {
    this.actions$.pipe(ofAction(Login))
      .subscribe((action) => console.log('New Login!.......'));
  }
}
