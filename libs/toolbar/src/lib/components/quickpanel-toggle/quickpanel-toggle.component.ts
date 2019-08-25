import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ngx-quickpanel-toggle',
  templateUrl: './quickpanel-toggle.component.html',
  styleUrls: ['./quickpanel-toggle.component.scss'],
})
export class QuickpanelToggleComponent implements OnInit {
  @Input()
  quickpanel: MatSidenav;

  constructor() {}

  ngOnInit() {}

  openQuickpanel() {
    this.quickpanel.open();
  }
}
