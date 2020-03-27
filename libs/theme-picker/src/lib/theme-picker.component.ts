import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ChangeTheme, PreferenceState, ThemeName, themes } from '@ngx-starter-kit/core';
import { Select, Store } from '@ngxs/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { StyleManagerService } from './style-manager.service';

@AutoUnsubscribe()
@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
  // host: { 'aria-hidden': 'true' }
})
export class ThemePickerComponent implements OnInit, OnDestroy {
  @HostBinding('attr.aria-hidden') ariaHidden = true;
  allThemes = themes;
  @Select(PreferenceState.activeThemeName) activeThemeName$;
  currentTheme: ThemeName;

  constructor(private store: Store, public styleManager: StyleManagerService) {}

  changeTheme(themeName: ThemeName) {
    this.store.dispatch(new ChangeTheme(themeName));
  }

  ngOnInit(): void {
    // this.installTheme(this.store.selectSnapshot(PreferenceState.activeThemeName));
    this.activeThemeName$.subscribe((themeName) => {
      this.installTheme(themeName);
    });
  }

  ngOnDestroy(): void {}

  installTheme(themeName: ThemeName) {
    console.log(`installing ${themeName}`);
    if (themeName) {
      this.currentTheme = themeName;
      const theme = this.allThemes.get(themeName);
      if (theme.isDefault) {
        this.styleManager.removeStyle('theme');
      } else {
        this.styleManager.setStyle('theme', `assets/themes/${theme.href}`);
      }
    }
  }
}
