import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ThemePickerModule } from '@ngx-starter-kit/theme-picker';
import { NotificationsModule } from '@ngx-starter-kit/notifications';

import { ToolbarComponent } from './toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FullscreenToggleComponent } from './components/fullscreen-toggle/fullscreen-toggle.component';
import { SidenavToggleComponent } from './components/sidenav-toggle/sidenav-toggle.component';
import { QuickpanelToggleComponent } from './components/quickpanel-toggle/quickpanel-toggle.component';
import { SharedFlexLayoutModule } from '@ngx-starter-kit/shared';
import { ClickOutsideModule } from '@ngx-starter-kit/ngx-utils';

const matModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
];

@NgModule({
  imports: [
    CommonModule,
    [...matModules],
    ClickOutsideModule,
    SharedFlexLayoutModule,
    ThemePickerModule,
    RouterModule,
    NotificationsModule,
  ],
  exports: [ToolbarComponent],
  declarations: [
    ToolbarComponent,
    SearchComponent,
    SearchBarComponent,
    UserMenuComponent,
    FullscreenToggleComponent,
    SidenavToggleComponent,
    QuickpanelToggleComponent,
  ],
})
export class ToolbarModule {}
