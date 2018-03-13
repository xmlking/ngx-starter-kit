import { Component, Input, OnInit } from '@angular/core';
import {Logout} from "@nx-starter-kit/auth";
import {Ngxs} from "ngxs";

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  isOpen: boolean;
  @Input() currentUser = null;

  constructor(private ngxs: Ngxs) {}

  ngOnInit() {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  public logout() {
    this.ngxs.dispatch(new Logout());
  }
}
