import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './containers/landing/landing.component';
import { SharedModule } from '@nx-starter-kit/shared';
import { SvgViewerComponent } from './components/svg-viewer/svg-viewer.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: LandingComponent }
    ])
  ],
  declarations: [HeaderComponent, LandingComponent, SvgViewerComponent]
})
export class HomeModule {}
