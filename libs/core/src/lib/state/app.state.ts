import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { Inject } from '@angular/core';
import { WINDOW } from '../services/window.token';

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]; // ["web", "android", "windows"]
  readonly userChoice: Promise<'accepted' | 'dismissed'>;
  prompt(): void;
}

export class ChangeInstallStatus {
  static readonly type = '[App] Change Install Status';
  constructor(public payload: boolean) {}
}
export class SetInstallPrompt {
  static readonly type = '[App] Set Install Prompt';
  constructor(public payload: BeforeInstallPromptEvent) {}
}
export class Online {
  static readonly type = '[App] Network Online';
}
export class Offline {
  static readonly type = '[App] Network Offline';
}

export interface AppStateModel {
  online: boolean;
  installPrompt: BeforeInstallPromptEvent;
  installed: boolean;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    online: window.navigator.onLine,
    installPrompt: null,
    installed: false,
  },
})
export class AppState {
  constructor() {}

  @Selector()
  static online(state: AppStateModel) {
    return state.online;
  }

  @Selector()
  static installPrompt(state: AppStateModel) {
    return state.installPrompt;
  }

  @Selector()
  static installed(state: AppStateModel) {
    return state.installed;
  }

  @Action(SetInstallPrompt)
  setInstallPrompt({ patchState }: StateContext<AppStateModel>, { payload }: SetInstallPrompt) {
    patchState({
      installPrompt: payload,
    });
  }

  @Action(ChangeInstallStatus)
  changeInstallStatus({ patchState }: StateContext<AppStateModel>, { payload }: ChangeInstallStatus) {
    patchState({
      installed: payload,
    });
  }

  @Action(Online)
  makeOnline({ patchState }: StateContext<AppStateModel>) {
    patchState({
      online: true,
    });
  }

  @Action(Offline)
  makeOffline({ patchState }: StateContext<AppStateModel>) {
    patchState({
      online: false,
    });
  }
}
