import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent implements OnInit {
  @Input() menu;
  @Input() iconOnly: boolean;
  @Input() secondaryMenu = false;

  constructor() {}

  ngOnInit() {}

  openLink() {
    this.menu.open = this.menu.open;
  }
  getHeight() {
    if (this.menu.open === false) return '48px';
    else {
      if (this.menu && this.menu.sub) {
        const height = this.menu.sub.length * 56 + 56 + 'px';
        return height;
      }
    }
  }

  chechForChildMenu() {
    return !!(this.menu && this.menu.sub);
  }
}
