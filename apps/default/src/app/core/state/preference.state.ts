import { State, Store } from '@ngxs/store';
import { EventBus } from '@default/core/state/eventbus';

export interface PreferenceStateModel {
  language?: string;
  theme?: string;
}

@State<PreferenceStateModel>({
  name: 'preference',
  defaults: {
    language: 'en',
    theme: 'deeppurple-amber'
  }
})
export class PreferenceState {
  constructor(private store: Store, private eventBus: EventBus) {}
}
