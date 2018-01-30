import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EntityTableComponent } from './components/entity-table/entity-table.component';
import { MinValidatorDirective } from './directives/min/min.directive';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu-item/side-menu-item.component';
import { ToolBarNotificationComponent } from './components/tool-bar-notification/tool-bar-notification.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const COMPONENTS = [
  EntityTableComponent,
  FooterComponent,
  SideMenuComponent,
  SideMenuItemComponent,
  ToolBarNotificationComponent,
  ToolBarComponent,
  SearchBarComponent,
  FullscreenComponent,
  SideBarComponent,
  UserMenuComponent
];

const DIRECTIVES = [MinValidatorDirective];

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule, PerfectScrollbarModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [
    CommonModule,
    FormsModule, //FIXME : remove
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    PerfectScrollbarModule,
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  providers: [{ provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }]
})
export class SharedModule {}
