import { accountReducer } from './account.reducer';
import { accountInitialState } from './account.init';
import { Account } from './account.interfaces';
import { DataLoaded } from './account.actions';

describe('accountReducer', () => {
  it('should work', () => {
    const state: Account = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = accountReducer(state, action);
    expect(actual).toEqual({});
  });
});
