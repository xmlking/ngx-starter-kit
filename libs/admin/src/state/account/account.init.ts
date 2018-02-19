import { Account } from './account.interfaces';

export const accountInitialState: Account = {
  id: 0,
  name: 'Ramsey Cummings',
  gender: 'male',
  age: 52,
  address: {
    state: 'South Carolina',
    city: 'Glendale'
  }
};
