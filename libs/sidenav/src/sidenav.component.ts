import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { SidenavItem } from './components/sidenav-item/sidenav-item.model';
// import { NavigationService } from "./services/navigation/navigation.service";

import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'sumo-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit, OnDestroy {
  items: SidenavItem[];

  private _itemsSubscription: Subscription;
  private _routerEventsSubscription: Subscription;

  constructor(
    // private navigationService: NavigationService,
    private navigationService: SidenavService,
    private router: Router,
    // private breadcrumbService: BreadcrumbService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this._itemsSubscription = this.navigationService.navItems$.subscribe((items: SidenavItem[]) => {
      this.items = items;
    });

    this._routerEventsSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.navigationService.nextCurrentlyOpenByRoute(event.url);
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 400);
      }
    });
  }

  toggleIconSidenav() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

    this.navigationService.isIconSidenav = !this.navigationService.isIconSidenav;

    const snackBarConfig: MatSnackBarConfig = <MatSnackBarConfig>{
      duration: 10000
    };

    if (this.navigationService.isIconSidenav) {
      this.snackBar.open(
        'You activated Icon-Sidenav, move your mouse to the content and see what happens!',
        '',
        snackBarConfig
      );
    }
  }

  isIconSidenav(): boolean {
    return this.navigationService.isIconSidenav;
  }

  ngOnDestroy() {
    this._itemsSubscription.unsubscribe();
    this._routerEventsSubscription.unsubscribe();
  }
}
