import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatTooltipModule,
  MatToolbarModule,
  MatRippleModule,
  MatBadgeModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { FullscreenModule } from '@nx-starter-kit/fullscreen';
import { BreadcrumbsModule } from '@nx-starter-kit/breadcrumbs';
import { ThemePickerModule } from '@nx-starter-kit/theme-picker';

import { ToolbarComponent } from './toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { ClickOutsideDirective } from './components/click-outside/click-outside.directive';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatInputModule,
    MatTooltipModule,
    MatListModule,
    MatToolbarModule,
    MatRippleModule,
    MatBadgeModule,
    FlexLayoutModule,
    FullscreenModule,
    BreadcrumbsModule,
    ThemePickerModule,
    FormsModule, //FIXME : remove
    PerfectScrollbarModule,
    RouterModule,
    CommonModule
  ],
  exports: [ToolbarComponent],
  declarations: [
    ToolbarComponent,
    SearchComponent,
    SearchBarComponent,
    NotificationsComponent,
    UserMenuComponent,
    ClickOutsideDirective
  ]
})
export class ToolbarModule {}
