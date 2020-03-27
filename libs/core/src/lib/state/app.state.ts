import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]; // ["web", "android", "windows"]
  readonly userChoice: Promise<'accepted' | 'dismissed'>;
  prompt(): void;
}

export class ChangeOnlineStatus {
  static readonly type = '[App] Change Online Status';
}

export class ChangeInstallStatus {
  static readonly type = '[App] Change Install Status';
  constructor(public payload: boolean) {}
}

export class SetInstallPrompt {
  static readonly type = '[App] Set Install Prompt';
  constructor(public payload: BeforeInstallPromptEvent) {}
}

export class IsOnline {
  static readonly type = '[App] Network Online';
}

export class IsOffline {
  static readonly type = '[App] Network Offline';
}

export interface AppStateModel {
  online: boolean;
  installPrompt: BeforeInstallPromptEvent;
  installed: boolean;
}

/** @dynamic */
@State<AppStateModel>({
  name: 'app',
  defaults: {
    online: window.navigator.onLine,
    installPrompt: null,
    installed: false,
  },
})
@Injectable({
  providedIn: 'root',
})
export class AppState {
  constructor(/*@Inject(WINDOW) private readonly window: Window*/) {}

  @Selector()
  static isOnline(state: AppStateModel) {
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

  @Action(ChangeOnlineStatus)
  changeOnlineStatus({ patchState }: StateContext<AppStateModel>) {
    patchState({
      online: window.navigator.onLine,
    });
  }
}
