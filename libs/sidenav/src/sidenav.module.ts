import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavItemComponent } from './components/sidenav-item/sidenav-item.component';
import { SidenavComponent } from './sidenav.component';
import { IconSidenavDirective } from './icon-sidenav.directive';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import {NavigationService} from "./services/navigation/navigation.service";
import { SidenavService } from './sidenav.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    PerfectScrollbarModule,
    // MatTabsModule,
    // MatDialogModule,
    // MatMenuModule,
    // MatGridListModule,
    // MatCardModule,
    // MatSnackBarModule,
    // MatTooltipModule,
    // MatSliderModule,
    // MatAutocompleteModule,
    // MatSlideToggleModule,
    MatSidenavModule,
    // MatCheckboxModule,
    // MatNativeDateModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatSelectModule,
    MatRippleModule,
    // MatButtonToggleModule
    FlexLayoutModule,
    CommonModule
  ],
  exports: [SidenavComponent, IconSidenavDirective],
  declarations: [SidenavItemComponent, SidenavComponent, IconSidenavDirective],
  // providers: [NavigationService]
  providers: [SidenavService]
})
export class SidenavModule {}
