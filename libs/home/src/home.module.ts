import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './containers/landing/landing.component';
import { SharedModule } from '@nx-starter-kit/shared';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: LandingComponent }
    ])
  ],
  declarations: [HeaderComponent, FooterComponent, LandingComponent]
})
export class HomeModule {}
