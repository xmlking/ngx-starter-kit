import { Injectable, EventEmitter, Inject } from '@angular/core';
import { WINDOW } from '@ngx-starter-kit/core';

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

  constructor(@Inject(WINDOW) private window: Window) {}

  public onThemeUpdate: EventEmitter<DocsSiteTheme> = new EventEmitter<DocsSiteTheme>();

  public storeTheme(theme: DocsSiteTheme) {
    this.window.localStorage[ThemeStorageService.storageKey] = JSON.stringify(theme);
    this.onThemeUpdate.emit(theme);
  }

  public getStoredTheme(): DocsSiteTheme {
    return JSON.parse(this.window.localStorage[ThemeStorageService.storageKey] || null);
  }

  public clearStorage() {
    this.window.localStorage.removeItem(ThemeStorageService.storageKey);
  }
}
