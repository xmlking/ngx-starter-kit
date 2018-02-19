import { Account } from './account.interfaces';
import { AccountAction } from './account.actions';

export function accountReducer(state: Account, action: AccountAction): Account {
  switch (action.type) {
    case 'DATA_LOADED': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
