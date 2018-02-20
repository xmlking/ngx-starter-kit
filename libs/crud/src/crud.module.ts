import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@nx-starter-kit/shared';
import { AccountsComponent } from './containers/accounts/accounts.component';
import { AccountFormComponent } from './containers/accounts/account-form.component';
import { AccountService } from './containers/accounts/account.service';
import { getEntityRoutes } from '@nx-starter-kit/shared';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {path: '', redirectTo: 'accounts', pathMatch: 'full'  ,data: { animation: 'crud' }},
      ...getEntityRoutes('accounts', AccountsComponent, AccountFormComponent)
    ])
  ],
  declarations: [AccountsComponent, AccountFormComponent],
  providers: [AccountService]
})
export class CrudModule {}
