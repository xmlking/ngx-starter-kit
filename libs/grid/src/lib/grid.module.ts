import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppConfirmModule } from '@ngx-starter-kit/app-confirm';
import { BreadcrumbsModule } from '@ngx-starter-kit/breadcrumbs';
import { TruncateModule, HelperModule, NgLetModule } from '@ngx-starter-kit/ngx-utils';
import { SharedMaterialDateModule, SharedFlexLayoutModule } from '@ngx-starter-kit/shared';

import { AccountsGridListComponent } from './containers/accounts-grid-list/accounts-grid-list.component';
import { AccountsTableComponent } from './containers/accounts-table/accounts-table.component';
import { AccountService } from './services/account.service';
import { RandomAccountService } from './services/random-account.service';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';

const matModules = [
  DragDropModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule,
  MatSelectModule,
  MatAutocompleteModule,
];

@NgModule({
  imports: [
    CommonModule,
    NgLetModule,
    BreadcrumbsModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    [...matModules],
    SharedFlexLayoutModule,
    SharedMaterialDateModule,
    AppConfirmModule,
    TruncateModule,
    HelperModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', redirectTo: 'crud-table', pathMatch: 'full' },
      {
        path: 'crud-table',
        component: AccountsTableComponent,
        data: { title: 'Accounts', depth: 2 },
        children: [
          {
            path: ':id',
            component: AccountDetailComponent,
            data: { title: 'Account Detail' },
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
