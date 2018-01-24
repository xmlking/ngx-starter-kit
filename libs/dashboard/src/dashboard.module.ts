import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountsComponent } from './containers/accounts/accounts.component';
import { SharedModule } from '@nx-starter-kit/shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { accountReducer } from './state/account/account.reducer';
import { accountInitialState } from './state/account/account.init';
import { AccountEffects } from './state/account/account.effects';
import { AccountService } from './services/account/account.service';
import {ThemePickerModule} from "@nx-starter-kit/theme-picker";

// import {AccountMockService} from "./services/account/account.mock.service";
// import {HttpClientModule} from "@angular/common/http";
// import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
// import {environment} from "../../../apps/default/src/environments/environment";

@NgModule({
  imports: [
    SharedModule,
    // FIXME: https://github.com/angular/in-memory-web-api/issues/167
    // commend this two lines to use core `InMemoryDataService`
    // HttpClientModule,
    // environment.demo ? HttpClientInMemoryWebApiModule.forFeature(AccountMockService) : [],
    NgxDatatableModule,
    ThemePickerModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: AccountsComponent }
    ]),
    StoreModule.forFeature('account', accountReducer, { initialState: accountInitialState }),
    EffectsModule.forFeature([AccountEffects])
  ],
  declarations: [HeaderComponent, FooterComponent, AccountsComponent],
  providers: [AccountService, AccountEffects]
})
export class DashboardModule {}
