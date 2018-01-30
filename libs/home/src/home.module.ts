import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@nx-starter-kit/shared';
import { ThemePickerModule } from '@nx-starter-kit/theme-picker';
import { HeaderComponent } from './components/header/header.component';
import { SvgViewerComponent } from './components/svg-viewer/svg-viewer.component';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { LandingComponent } from './containers/landing/landing.component';
import { BlogComponent } from './containers/blog/blog.component';
import { AboutComponent } from './containers/about/about.component';

@NgModule({
  imports: [
    SharedModule,
    ThemePickerModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: HomeLayoutComponent,
        data: { animation: 'home' },
        children: [
          {
            path: '',
            component: LandingComponent,
            data: { animation: 'home' }
          },
          {
            path: 'blog',
            component: BlogComponent,
            data: { animation: 'blog' }
          },
          {
            path: 'about',
            component: AboutComponent,
            data: { animation: 'about' }
          }
        ]
      }
    ])
  ],
  declarations: [
    HeaderComponent,
    SvgViewerComponent,
    HomeLayoutComponent,
    LandingComponent,
    BlogComponent,
    AboutComponent
  ]
})
export class HomeModule {}
