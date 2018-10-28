import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ngx-starter-kit/shared';
import { AppConfirmModule } from '@ngx-starter-kit/app-confirm';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TruncateModule, HelperModule } from '@ngx-starter-kit/ngx-utils';
import { AccountsGridListComponent } from './containers/accounts-grid-list/accounts-grid-list.component';
import { AccountsTableComponent } from './containers/accounts-table/accounts-table.component';
import { AccountService } from './services/account.service';
import { RandomAccountService } from './services/random-account.service';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';

@NgModule({
  imports: [
    SharedModule,
    DragDropModule,
    AppConfirmModule,
    TruncateModule,
    HelperModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', redirectTo: 'crud-table', pathMatch: 'full' },
      {
        path: 'crud-table',
        component: AccountsTableComponent,
        data: { title: 'Accounts', depth: 2  },
        children: [
          {
            path: ':id',
            component: AccountDetailComponent,
            data: { title: 'Account Detail'},
          },
        ],
      },
      {
        path: 'grid-list',
        component: AccountsGridListComponent,
        data: { title: 'Accounts Grid-List', depth: 3 },
      },
    ]),
  ],
  declarations: [AccountsTableComponent, AccountsGridListComponent, AccountDetailComponent, AccountEditComponent],
  entryComponents: [AccountEditComponent],
  providers: [AccountService, RandomAccountService],
})
export class GridModule {}
