import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountsComponent } from './containers/accounts/accounts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', pathMatch: 'full', component: AccountsComponent },
    ])
  ],
  declarations: [HeaderComponent, FooterComponent, AccountsComponent]
})
export class DashboardModule {}
