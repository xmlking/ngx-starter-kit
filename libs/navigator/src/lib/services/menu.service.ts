import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';

import { Tree } from '@ngx-starter-kit/tree';
import { NavigationEnd, Router } from '@angular/router';
import { MediaQueryService } from '@default/core';
import { SidenavState } from './sidenav-state.enum';
import { MENU_ITEMS } from '../symbols';

@Injectable()
export class MenuService {
  /**
   * Menu Items
   */
  private _tree: Tree<MenuItem>;

  private _items = new BehaviorSubject<MenuItem[]>([{ name: 'dummy' }]);

  items$ = this._items.asObservable();

  get items(): MenuItem[] {
    return this._items.getValue();
  }

  set items(items: MenuItem[]) {
    this._items.next(items);
  }

  // TODO: temp
  get tree(): Tree<MenuItem> {
    return this._tree;
  }

  /**
   * Currently Open
   */
  private _currentlyOpen = new BehaviorSubject<MenuItem[]>([]);

  currentlyOpen$ = this._currentlyOpen.asObservable();

  get currentlyOpen(): MenuItem[] {
    return this._currentlyOpen.getValue();
  }

  set currentlyOpen(currentlyOpen: MenuItem[]) {
    this._currentlyOpen.next(currentlyOpen);
  }

  /**
   * SidenavState for Animation
   */
  private _sidenavState = new BehaviorSubject<SidenavState>(SidenavState.Expanded);

  sidenavState$ = this._sidenavState.asObservable();

  get sidenavState() {
    return this._sidenavState.getValue();
  }

  set sidenavState(sidenavState: SidenavState) {
    this._sidenavState.next(sidenavState);
  }
  isIconSidenav: boolean;
  isLowerThanLarge: boolean;

  constructor(
    @Inject(MENU_ITEMS) private menuItems: MenuItem[],
    private router: Router,
    private mediaQueryService: MediaQueryService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setCurrentlyOpenByRoute(event.url);

        if (this.isLowerThanLarge) {
          // Close Sidenav on Mobile after Route Change
          this.sidenavState = SidenavState.Mobile;
        }
      }
    });

    this.mediaQueryService.isLowerThanLarge$.subscribe(isLowerThanLarge => {
      this.isLowerThanLarge = isLowerThanLarge;
      if (
        isLowerThanLarge &&
        !(this.sidenavState === SidenavState.Mobile || this.sidenavState === SidenavState.MobileOpen)
      ) {
        this.sidenavState = SidenavState.Mobile;
      } else if (!isLowerThanLarge) {
        this.sidenavState = SidenavState.Expanded;
      }
    });

    // sets defaultMenu as default;
    //this.publishMenuChange('default-menu');
    this._tree = new Tree<MenuItem>({ name: 'root', children: menuItems });
    this._items.next(this._tree.root.children);
  }

  isOpen(item: MenuItem) {
    return this.currentlyOpen.indexOf(item) !== -1;
  }

  toggleItemOpen(item: MenuItem) {
    let currentlyOpen = this.currentlyOpen;

    if (this.isOpen(item)) {
      if (currentlyOpen.length > 1) {
        currentlyOpen.length = this.currentlyOpen.indexOf(item);
      } else {
        currentlyOpen = [];
      }
    } else {
      currentlyOpen = this.getParents(item);
    }

    this.currentlyOpen = currentlyOpen;
  }

  // private setCurrentlyOpenByRoute(route: string) {
  public setCurrentlyOpenByRoute(route: string) {
    const item = this._tree.findByPredicateBFS(node => {
      return node.link === route;
    });
    let currentlyOpen = [];

    if (item && item.parent) {
      currentlyOpen = this.getParents(item);
    } else if (item) {
      currentlyOpen = [item];
    }

    this.currentlyOpen = currentlyOpen;
  }

  getItemByRoute(route: string) {
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
  // publishMenuChange(menuType: string) {
  //   let menuItems;
  //   switch (menuType) {
  //     case 'admin-menu':
  //       menuItems = adminMenu;
  //       break;
  //     case 'demo-menu':
  //       menuItems = demoMenu;
  //       break;
  //     default:
  //       menuItems = defaultMenu;
  //   }
  //
  //   this._tree = new Tree<MenuItem>({ name: 'root', children: menuItems });
  //   this._items.next(this._tree.root.children);
  // }
}
