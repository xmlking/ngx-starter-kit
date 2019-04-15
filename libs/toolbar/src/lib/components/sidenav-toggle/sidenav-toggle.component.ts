import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ngx-sidenav-toggle',
  templateUrl: './sidenav-toggle.component.html',
  styleUrls: ['./sidenav-toggle.component.scss'],
})
export class SidenavToggleComponent implements OnInit {
  @Input()
  sidenav: MatSidenav;

  constructor() {}

  ngOnInit() {}

  openSidenav() {
    this.sidenav.open();
  }
}
