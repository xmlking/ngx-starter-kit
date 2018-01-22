export interface Address {
  state: string;
  city: string;
}
export interface Account {
  id: number;
  name: string;
  gender: string;
  age: number;
  address: Address;
}

export interface AccountState {
  readonly account: Account;
}
