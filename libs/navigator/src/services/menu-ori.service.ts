import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';
import { defaultMenu, demoMenu, adminMenu } from './menu-data';

import { Tree } from '@nx-starter-kit/tree';

@Injectable()
export class MenuService {
  private _tree: Tree<MenuItem>;

  private _items = new BehaviorSubject<MenuItem[]>([{ name: 'dummy' }]);

  items$ = this._items.asObservable();

  get items(): MenuItem[] {
    return this._items.getValue();
  }

  set items(items: MenuItem[]) {
    this._items.next(items);
  }

  private _currentlyOpen: MenuItem[] = [];
  private _currentlyOpenSubject = new BehaviorSubject<MenuItem[]>([]);
  currentlyOpen$ = this._currentlyOpenSubject.asObservable();

  isIconSidenav: boolean;

  constructor() {
    // sets defaultMenu as default;
    this.publishMenuChange('default-menu');
  }

  isOpen(item: MenuItem) {
    return this._currentlyOpen.indexOf(item) !== -1;
  }

  toggleCurrentlyOpen(item: MenuItem) {
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

    this.nextCurrentlyOpen(currentlyOpen);
  }

  nextCurrentlyOpen(currentlyOpen: MenuItem[]) {
    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  nextCurrentlyOpenByRoute(route: string) {
    let currentlyOpen: MenuItem[] = [];

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

  private getParents(item: MenuItem): MenuItem[] {
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
      case 'demo-menu':
        menuItems = demoMenu;
        break;
      default:
        menuItems = defaultMenu;
    }

    this._tree = new Tree<MenuItem>({ name: 'root', children: menuItems });
    this._items.next(this._tree.root.children);
  }

  getDefaultMenu() {
    let menuItems;
    menuItems = defaultMenu;
    return new Tree<MenuItem>({ name: 'root', children: menuItems });
  }
}
