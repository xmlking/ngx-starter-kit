import { Component, Input, OnInit } from '@angular/core';
import { menus } from './menu-element';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() iconOnly = false;
  public menus = menus;
  constructor() {}

  ngOnInit() {}
}
