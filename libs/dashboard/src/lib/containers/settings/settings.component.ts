import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';
import {
  ChangeLanguage,
  ChangeTheme,
  DisableNotifications,
  EnableNotifications,
  Language,
  PreferenceState,
  PreferenceStateModel,
  PushNotificationService,
  ThemeName,
} from '@ngx-starter-kit/core';
import { Store } from '@ngxs/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'ngx-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  crumbs: ReadonlyArray<Crumb> = [{ name: 'Dashboard', link: '/dashboard' }, { name: 'Settings' }];
  preferences: PreferenceStateModel;
  settingsForm: FormGroup;
  languages: Language[] = ['en', 'es', 'de', 'fr', 'cn'];
  themes: ThemeName[] = [
    ThemeName.DEEPPURPLE_AMBER,
    ThemeName.INDIGO_PINK,
    ThemeName.PINK_BLUEGREY,
    ThemeName.PURPLE_GREEN,
  ];

  constructor(private fb: FormBuilder, private store: Store, private pnServ: PushNotificationService) {}

  ngOnInit() {
    this.preferences = this.store.selectSnapshot(PreferenceState);
    this.buildForm();

    this.settingsForm
      .get('selectedLanguage')
      .valueChanges.subscribe(selectedLanguage => this.store.dispatch(new ChangeLanguage(selectedLanguage)));

    this.settingsForm
      .get('selectedTheme')
      .valueChanges.subscribe(selectedTheme => this.store.dispatch(new ChangeTheme(selectedTheme)));

    this.settingsForm.get('enableNotifications').valueChanges.subscribe(async enableNotifications => {
      if (enableNotifications) {
        await this.pnServ.register();
        this.store.dispatch(new EnableNotifications());
      } else {
        await this.pnServ.unregister();
        this.store.dispatch(new DisableNotifications());
      }
    });
  }

  ngOnDestroy() {}

  buildForm() {
    this.settingsForm = this.fb.group({
      selectedLanguage: [this.preferences.language],
      selectedTheme: [this.preferences.activeThemeName],
      enableNotifications: this.preferences.enableNotifications,
    });
  }
}
