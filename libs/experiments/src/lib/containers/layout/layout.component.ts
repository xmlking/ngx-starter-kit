import { Component, OnInit } from '@angular/core';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';

@Component({
  selector: 'ngx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Layout Demo' },
  ];
  constructor() {}

  ngOnInit() {}
}
