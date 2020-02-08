import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './services/menu.service';
import { MenuItem } from './models/menu-item.model';
import { MENU_ITEMS } from './symbols';

@NgModule({
  imports: [CommonModule],
})
export class NavigatorModule {
  static forRoot(menuItems: MenuItem[]): ModuleWithProviders<NavigatorModule> {
    return {
      ngModule: NavigatorModule,
      providers: [MenuService, { provide: MENU_ITEMS, useValue: menuItems }],
    };
  }
}
