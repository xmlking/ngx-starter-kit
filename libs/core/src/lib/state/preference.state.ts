import { State, Store } from '@ngxs/store';

export interface PreferenceStateModel {
  language?: string;
  theme?: string;
}

@State<PreferenceStateModel>({
  name: 'preference',
  defaults: {
    language: 'en',
    theme: 'deeppurple-amber',
  },
})
export class PreferenceState {
  constructor(private store: Store) {}
}
