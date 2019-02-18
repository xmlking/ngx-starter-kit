import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';

import { Tree } from '@ngx-starter-kit/tree';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavState } from './sidenav-state.enum';
import { MENU_ITEMS } from '../symbols';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { map } from 'rxjs/operators';

@Injectable()
export class MenuService {
  /**
   * Menu Items
   */
  private treePrivate: Tree<MenuItem>;

  private itemsPrivate = new BehaviorSubject<MenuItem[]>([{ name: 'dummy' }]);

  items$ = this.itemsPrivate.asObservable();

  get items(): MenuItem[] {
    return this.itemsPrivate.getValue();
  }

  set items(items: MenuItem[]) {
    this.itemsPrivate.next(items);
  }

  // TODO: temp
  get tree(): Tree<MenuItem> {
    return this.treePrivate;
  }

  /**
   * Currently Open
   */
  private currentlyOpenPrivate = new BehaviorSubject<MenuItem[]>([]);

  currentlyOpen$ = this.currentlyOpenPrivate.asObservable();

  get currentlyOpen(): MenuItem[] {
    return this.currentlyOpenPrivate.getValue();
  }

  set currentlyOpen(currentlyOpen: MenuItem[]) {
    this.currentlyOpenPrivate.next(currentlyOpen);
  }

  /**
   * SidenavState for Animation
   */
  private sidenavStatePrivate = new BehaviorSubject<SidenavState>(SidenavState.Expanded);

  sidenavState$ = this.sidenavStatePrivate.asObservable();

  get sidenavState() {
    return this.sidenavStatePrivate.getValue();
  }

  set sidenavState(sidenavState: SidenavState) {
    this.sidenavStatePrivate.next(sidenavState);
  }
  isIconSidenav: boolean;
  isLowerThanLarge: boolean;

  constructor(@Inject(MENU_ITEMS) private menuItems: MenuItem[], private router: Router, mediaObserver: MediaObserver) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setCurrentlyOpenByRoute(event.url);

        if (this.isLowerThanLarge) {
          // Close Sidenav on Mobile after Route Change
          this.sidenavState = SidenavState.Mobile;
        }
      }
    });

    mediaObserver.media$
      .pipe(map((change: MediaChange) => change.mqAlias === 'xs' || change.mqAlias === 'sm' || change.mqAlias === 'md'))
      .subscribe(isLowerThanLarge => {
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
    // this.publishMenuChange('default-menu');
    this.treePrivate = new Tree<MenuItem>({ name: 'root', children: menuItems });
    this.itemsPrivate.next(this.treePrivate.root.children);
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
    const item = this.treePrivate.findByPredicateBFS(node => {
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
    return this.treePrivate.findByPredicateBFS(node => {
      return node.link === route;
    });
  }

  private getParents(item: MenuItem): MenuItem[] {
    const ancestors = this.treePrivate.getAllParents(item);
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
