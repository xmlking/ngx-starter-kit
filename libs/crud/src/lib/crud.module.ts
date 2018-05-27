import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ngx-starter-kit/shared';
import { AccountsComponent } from './containers/accounts/accounts.component';
import { AccountFormComponent } from './containers/accounts/account-form.component';
import { AccountService } from './containers/accounts/account.service';
import { AppConfirmModule } from '@ngx-starter-kit/app-confirm';

@NgModule({
  imports: [
    SharedModule,
    AppConfirmModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', redirectTo: 'accounts', pathMatch: 'full', data: { animation: 'crud' } },
      { path: 'accounts', component: AccountsComponent }
    ])
  ],
  declarations: [AccountsComponent, AccountFormComponent],
  entryComponents: [AccountFormComponent],
  providers: [AccountService]
})
export class CrudModule {}
