import { TreeNode } from '@nx-starter-kit/tree';

export enum SidenavItemType {
  Link = 'link',
  DropDown = 'dropDown',
  Icon = 'icon',
  Separator = 'separator',
  ExtLink = 'extLink'
}

export interface SidenavItem extends TreeNode<SidenavItem> {
  name: string; // Used as display text for item and title for separator type
  type?: SidenavItemType; // Possible values: link/dropDown/icon/separator/extLink
  icon?: string; // Item icon name
  link?: string; // Router state
  chip?: { value: number; color?: string };
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
}
