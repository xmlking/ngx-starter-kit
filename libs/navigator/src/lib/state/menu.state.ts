import { Injectable } from '@angular/core';
import { Tree } from '@ngx-starter-kit/tree';
import { Action, NgxsAfterBootstrap, Selector, State, StateContext } from '@ngxs/store';
import { MenuItem } from '../models/menu-item.model';
import { MenuService } from '../services/menu.service';

export class NextCurrentlyOpened {
  static readonly type = '[Menu] Next Currently Opened';
  constructor(public readonly payload: MenuItem[]) {}
}

export class SetIconMode {
  static readonly type = '[Menu] SetIconMode';
  constructor(public readonly payload: boolean) {}
}

export class ToggleCurrentlyOpened {
  static readonly type = '[Menu] ToggleCurrentlyOpened';
  constructor(public readonly payload: MenuItem) {}
}

export class ToggleCurrentlyOpenedByRoute {
  static readonly type = '[Menu] ToggleCurrentlyOpenedByRoute';
  constructor(public readonly payload: string) {}
}

export interface MenuStateModel {
  tree: Tree<MenuItem>;
  currentlyOpened: MenuItem[];
  iconMode: boolean;
}

/** @dynamic */
@State<MenuStateModel>({
  name: 'menu',
  defaults: {
    tree: null,
    currentlyOpened: [],
    iconMode: false,
  },
})
@Injectable({
  providedIn: 'root',
})
export class MenuState implements NgxsAfterBootstrap {
  constructor(private menuService: MenuService) {}

  @Selector()
  static menuItems(state: MenuStateModel) {
    return state.tree.root.children;
  }

  @Selector()
  static currentlyOpened(state: MenuStateModel) {
    if (state.iconMode) {
      return [];
    } else {
      return state.currentlyOpened;
    }
  }

  ngxsAfterBootstrap({ setState, getState }: StateContext<MenuStateModel>) {
    setState({
      tree: this.menuService.tree,
      currentlyOpened: [],
      iconMode: false,
    });
  }

  private getParents(tree, item: MenuItem): MenuItem[] {
    const ancestors = tree.getAllParents(item);
    ancestors.shift();
    return ancestors;
  }

  @Action(SetIconMode)
  setIconMode({ getState, patchState }: StateContext<MenuStateModel>, { payload }: SetIconMode) {
    patchState({
      iconMode: payload,
    });
  }

  @Action(NextCurrentlyOpened)
  nextCurrentlyOpened({ getState, patchState }: StateContext<MenuStateModel>, { payload }: NextCurrentlyOpened) {
    patchState({
      currentlyOpened: payload,
    });
  }

  @Action(ToggleCurrentlyOpened)
  toggleCurrentlyOpened({ getState, patchState }: StateContext<MenuStateModel>, { payload }: ToggleCurrentlyOpened) {
    // tslint:disable:prefer-const
    let { tree, currentlyOpened } = getState();
    const isOpen = currentlyOpened.indexOf(payload) !== -1;

    if (isOpen) {
      if (currentlyOpened.length > 1) {
        currentlyOpened.length = currentlyOpened.indexOf(payload);
      } else {
        currentlyOpened = [];
      }
    } else {
      currentlyOpened = this.getParents(tree, payload);
    }

    patchState({
      currentlyOpened,
    });
  }

  @Action(ToggleCurrentlyOpenedByRoute)
  toggleCurrentlyOpenedByRoute(
    { getState, patchState }: StateContext<MenuStateModel>,
    { payload }: ToggleCurrentlyOpenedByRoute,
  ) {
    const { tree } = getState();
    let currentlyOpened: MenuItem[] = [];

    const item = tree.findByPredicateBFS(node => {
      return node.link === payload;
    });

    if (item && item.parent) {
      currentlyOpened = this.getParents(tree, item);
    } else if (item) {
      currentlyOpened = [item];
    }

    patchState({
      currentlyOpened,
    });
  }
}
