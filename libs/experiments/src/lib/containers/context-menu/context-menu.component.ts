import { Component, OnInit } from '@angular/core';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';

@Component({
  selector: 'ngx-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Context Menu' },
  ];
  constructor() {}

  ngOnInit() {}
}
