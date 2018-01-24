import { Injectable, EventEmitter } from '@angular/core';

export interface DocsSiteTheme {
  href: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}

@Injectable()
export class ThemeStorageService {
  static storageKey = 'default-theme-storage-current';

  public onThemeUpdate: EventEmitter<DocsSiteTheme> = new EventEmitter<DocsSiteTheme>();

  public storeTheme(theme: DocsSiteTheme) {
    window.localStorage[ThemeStorageService.storageKey] = JSON.stringify(theme);
    this.onThemeUpdate.emit(theme);
  }

  public getStoredTheme(): DocsSiteTheme {
    return JSON.parse(window.localStorage[ThemeStorageService.storageKey] || null);
  }

  public clearStorage() {
    window.localStorage.removeItem(ThemeStorageService.storageKey);
  }
}
