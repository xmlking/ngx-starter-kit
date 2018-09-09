import { NgxsModule, Store } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { AuthState } from './auth.state';
import { LogoutSuccess } from './auth.actions';

describe('Auth', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('it toggles feed', () => {
    store.dispatch(new LogoutSuccess());
    store.select(state => state.auth.isLoggedIn).subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(false);
    });
  });
});
