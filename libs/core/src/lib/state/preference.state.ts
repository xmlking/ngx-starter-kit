import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';

export type Language = 'en' | 'es' | 'de' | 'fr' | 'cn';

export enum ThemeName {
  DEEPPURPLE_AMBER = 'DEEPPURPLE_AMBER',
  INDIGO_PINK = 'INDIGO_PINK',
  PINK_BLUEGREY = 'PINK_BLUEGREY',
  PURPLE_GREEN = 'PURPLE_GREEN',
}

export interface Theme {
  readonly primary: string;
  readonly accent: string;
  readonly href: string;
  readonly isDark: boolean;
  readonly isDefault?: boolean;
}

export const themes: Readonly<Map<ThemeName, Theme>> = new Map([
  [
    ThemeName.DEEPPURPLE_AMBER,
    {
      primary: '#673AB7',
      accent: '#FFC107',
      href: 'deeppurple-amber.css',
      isDark: false,
    },
  ],
  [
    ThemeName.INDIGO_PINK,
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      href: 'indigo-pink.css',
      isDark: false,
      isDefault: true,
    },
  ],
  [
    ThemeName.PINK_BLUEGREY,
    {
      primary: '#E91E63',
      accent: '#607D8B',
      href: 'pink-bluegrey.css',
      isDark: true,
    },
  ],
  [
    ThemeName.PURPLE_GREEN,
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      href: 'purple-green.css',
      isDark: true,
    },
  ],
]);

export class ChangeLanguage {
  static readonly type = '[Preference] Change Language';
  constructor(public payload: Language) {}
}
export class ChangeTheme {
  static readonly type = '[Preference] Change Theme';
  constructor(public payload: ThemeName) {}
}
export class EnableNotifications {
  static readonly type = '[Preference] Enable Notifications';
}
export class DisableNotifications {
  static readonly type = '[Preference] Disable Notifications';
}

export interface PreferenceStateModel {
  language: Language;
  activeThemeName: ThemeName;
  enableNotifications: boolean;
}

/** @dynamic */
@State<PreferenceStateModel>({
  name: 'preference',
  defaults: {
    language: 'en',
    activeThemeName: ThemeName.INDIGO_PINK,
    enableNotifications: false,
  },
})
@Injectable({
  providedIn: 'root',
})
export class PreferenceState {
  constructor(private store: Store) {}

  @Selector()
  static activeThemeName(state: PreferenceStateModel) {
    return state.activeThemeName;
  }

  @Action(ChangeLanguage)
  changeLanguage({ patchState }: StateContext<PreferenceStateModel>, { payload }: ChangeLanguage) {
    patchState({
      language: payload,
    });
  }

  @Action(ChangeTheme)
  changeTheme({ patchState }: StateContext<PreferenceStateModel>, { payload }: ChangeTheme) {
    patchState({
      activeThemeName: payload,
    });
  }

  @Action(EnableNotifications)
  enableNotifications({ patchState }: StateContext<PreferenceStateModel>) {
    patchState({
      enableNotifications: true,
    });
  }

  @Action(DisableNotifications)
  disableNotifications({ patchState }: StateContext<PreferenceStateModel>) {
    patchState({
      enableNotifications: false,
    });
  }
}
