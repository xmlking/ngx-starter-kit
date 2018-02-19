import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SidenavItem } from './components/sidenav-item/sidenav-item.model';
import { defaultMenu, iconMenu, adminMenu } from './sidenav-data';

import { Tree } from '@nx-starter-kit/tree';

@Injectable()
export class SidenavService {
  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';

  private _tree: Tree<SidenavItem>;
  private _navItemsSubject = new BehaviorSubject<SidenavItem[]>([{ name: 'dummy' }]);
  navItems$ = this._navItemsSubject.asObservable();

  private _currentlyOpen: SidenavItem[] = [];
  private _currentlyOpenSubject = new BehaviorSubject<SidenavItem[]>([]);
  currentlyOpen$ = this._currentlyOpenSubject.asObservable();

  isIconSidenav: boolean;

  constructor() {
    // sets defaultMenu as default;
    this.publishMenuChange('default-menu');
  }

  isOpen(item: SidenavItem) {
    return this._currentlyOpen.indexOf(item) !== -1;
  }

  toggleCurrentlyOpen(item: SidenavItem) {
    let currentlyOpen = this._currentlyOpen;

    if (this.isOpen(item)) {
      if (currentlyOpen.length > 1) {
        currentlyOpen.length = this._currentlyOpen.indexOf(item);
      } else {
        currentlyOpen = [];
      }
    } else {
      currentlyOpen = this.getParents(item);
    }

    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  nextCurrentlyOpen(currentlyOpen: SidenavItem[]) {
    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  nextCurrentlyOpenByRoute(route: string) {
    let currentlyOpen: SidenavItem[] = [];

    const item = this._tree.findByPredicateBFS(node => {
      return node.link === route;
    });

    if (item && item.parent) {
      currentlyOpen = this.getParents(item);
    } else if (item) {
      currentlyOpen = [item];
    }

    this.nextCurrentlyOpen(currentlyOpen);
  }

  get currentlyOpen() {
    return this._currentlyOpen;
  }

  getSidenavItemByRoute(route: string) {
    return this._tree.findByPredicateBFS(node => {
      return node.link === route;
    });
  }

  private getParents(item: SidenavItem): SidenavItem[] {
    const ancestors = this._tree.getAllParents(item);
    ancestors.shift();
    return ancestors;
  }

  // Customizer component uses this method to change menu.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishMenuChange(menuType: string) {
    let menuItems;
    switch (menuType) {
      case 'admin-menu':
        menuItems = adminMenu;
        break;
      case 'icon-menu':
        menuItems = iconMenu;
        break;
      default:
        menuItems = defaultMenu;
    }

    this._tree = new Tree<SidenavItem>({ name: 'root', children: menuItems });
    this._navItemsSubject.next(this._tree.root.children);
  }
}
