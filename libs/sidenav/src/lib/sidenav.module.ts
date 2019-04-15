import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SidenavItemComponent } from './components/sidenav-item/sidenav-item.component';
import { IconSidenavDirective } from './components/icon-sidenav/icon-sidenav.directive';
import { SidenavComponent } from './sidenav.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ScrollbarModule } from '@ngx-starter-kit/scrollbar';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatRippleModule,
    MatChipsModule,
    RouterModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    ScrollbarModule
  ],
  exports: [SidenavComponent, IconSidenavDirective],
  declarations: [SidenavItemComponent, MenuItemComponent, SidenavComponent, IconSidenavDirective],
})
export class SidenavModule {}
