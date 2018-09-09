import { TreeNode } from '@ngx-starter-kit/tree';

export enum MenuItemType {
  Link = 'link',
  DropDown = 'dropDown',
  Icon = 'icon',
  Separator = 'separator',
  ExtLink = 'extLink',
}

export interface MenuItem extends TreeNode<MenuItem> {
  name: string; // Used as display text for item and title for separator type
  type?: MenuItemType; // Possible values: link/dropDown/icon/separator/extLink
  icon?: string; // Item icon name
  link?: string; // Router state
  badge?: { value: number; color?: string };
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  [key: string]: any;
}
