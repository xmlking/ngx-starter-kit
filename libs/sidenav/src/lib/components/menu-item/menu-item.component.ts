import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '@ngx-starter-kit/navigator';

@Component({
  selector: 'ngx-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input()
  item: MenuItem;
  @Input()
  iconOnly: boolean;
  @Input()
  secondaryMenu = false;

  constructor() {}

  ngOnInit() {}

  openLink() {
    this.item.open = this.item.open;
  }
  getHeight() {
    if (this.item.open === false) {
      return '48px';
    } else {
      if (this.item && this.item.children) {
        const height = this.item.children.length * 56 + 56 + 'px';
        return height;
      }
    }
  }

  chechForChildMenu() {
    return !!(this.item && this.item.children);
  }
}
