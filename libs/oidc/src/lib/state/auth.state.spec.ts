import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AuthState, AuthStateModel } from './auth.state';
import { AuthAction } from './auth.actions';

describe('Auth store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: AuthStateModel = {
      items: ['item-1'],
    };
    store.dispatch(new AuthAction('item-1'));
    const actual = store.selectSnapshot(AuthState.getState);
    expect(actual).toEqual(expected);
  });
});
