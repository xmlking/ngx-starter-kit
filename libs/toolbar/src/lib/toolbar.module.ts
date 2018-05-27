import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from "@ngx-starter-kit/shared";
import { ThemePickerModule } from '@ngx-starter-kit/theme-picker';

import { ToolbarComponent } from './toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { ClickOutsideDirective } from './components/click-outside/click-outside.directive';
import { FullscreenToggleComponent } from './components/fullscreen-toggle/fullscreen-toggle.component';
import { SidenavToggleComponent } from './components/sidenav-toggle/sidenav-toggle.component';
import { QuickpanelToggleComponent } from './components/quickpanel-toggle/quickpanel-toggle.component';


@NgModule({
  imports: [
    SharedModule,
    ThemePickerModule,
    RouterModule
  ],
  exports: [ToolbarComponent],
  declarations: [
    ToolbarComponent,
    SearchComponent,
    SearchBarComponent,
    NotificationsComponent,
    UserMenuComponent,
    ClickOutsideDirective,
    FullscreenToggleComponent,
    SidenavToggleComponent,
    QuickpanelToggleComponent
  ]
})
export class ToolbarModule {}
