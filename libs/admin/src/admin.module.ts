import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AccountsComponent } from './containers/accounts/accounts.component';
import { SharedModule } from '@nx-starter-kit/shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AccountService } from './services/account/account.service';
import { ThemePickerModule } from '@nx-starter-kit/theme-picker';
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu-item/side-menu-item.component';
import { ToolBarNotificationComponent } from './components/tool-bar-notification/tool-bar-notification.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

// import {AccountMockService} from "./services/account/account.mock.service";
// import {HttpClientModule} from "@angular/common/http";
// import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
// import { environment } from '@env/environment';

const COMPONENTS = [
  HeaderComponent,
  SideMenuComponent,
  SideMenuItemComponent,
  ToolBarNotificationComponent,
  ToolBarComponent,
  SearchBarComponent,
  SideBarComponent,
  UserMenuComponent
];

@NgModule({
  imports: [
    SharedModule,
    // FIXME: https://github.com/angular/in-memory-web-api/issues/167
    // commend this two lines to use core `InMemoryDataService`
    // HttpClientModule,
    // environment.envName === 'mock' ? HttpClientInMemoryWebApiModule.forFeature(AccountMockService) : [],
    NgxDatatableModule,
    ThemePickerModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: AdminLayoutComponent,
        data: { animation: 'admin' },
        children: [
          {
            path: '',
            component: AccountsComponent,
            data: { animation: 'accounts' }
          },
          {
            path: 'products',
            component: AccountsComponent,
            data: { animation: 'products' }
          },
          {
            path: 'orders',
            component: AccountsComponent,
            data: { animation: 'orders' }
          }
        ]
      }
    ]),
  ],
  declarations: [...COMPONENTS, AccountsComponent, AdminLayoutComponent],
  providers: [AccountService]
})
export class AdminModule {}
