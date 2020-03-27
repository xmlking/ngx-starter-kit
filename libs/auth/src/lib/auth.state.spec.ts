import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { LogoutSuccess } from './auth.actions';
import { AuthState } from './auth.state';

describe('Auth', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthState])],
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

  it('it toggles feed', () => {
    store.dispatch(new LogoutSuccess());
    store
      .select((state) => state.auth.isLoggedIn)
      .subscribe((isLoggedIn) => {
        expect(isLoggedIn).toBe(false);
      });
  });
});
