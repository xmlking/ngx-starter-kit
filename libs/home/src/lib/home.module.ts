import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@ngx-starter-kit/shared';
import { ThemePickerModule } from '@ngx-starter-kit/theme-picker';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { LandingComponent } from './containers/landing/landing.component';
import { BlogComponent } from './containers/blog/blog.component';
import { AboutComponent } from './containers/about/about.component';
import { ScrollToTopModule } from '@ngx-starter-kit/scroll-to-top';
import { SvgViewerModule } from '@ngx-starter-kit/svg-viewer';
import { FeaturesComponent } from './containers/features/features.component';
import { StickyHeaderDirective } from './components/header/sticky-header.directive';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

const matModules = [MatListModule, MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatCardModule];

@NgModule({
  imports: [
    SharedModule,
    [...matModules],
    ScrollToTopModule,
    ThemePickerModule,
    SvgViewerModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: HomeLayoutComponent,
        data: { title: 'Home', animation: 'home' },
        children: [
          {
            path: '',
            component: LandingComponent,
            data: { title: 'Landing', animation: 'home' },
          },
          {
            path: 'blog',
            component: BlogComponent,
            data: { title: 'Blog', animation: 'blog' },
          },
          {
            path: 'about',
            component: AboutComponent,
            data: { title: 'About', animation: 'about' },
          },
          {
            path: 'features',
            component: FeaturesComponent,
            data: { title: 'Features', animation: 'features' },
          },
        ],
      },
    ]),
  ],
  declarations: [
    HeaderComponent,
    StickyHeaderDirective,
    FooterComponent,
    HomeLayoutComponent,
    LandingComponent,
    BlogComponent,
    AboutComponent,
    FeaturesComponent,
  ],
})
export class HomeModule {}
