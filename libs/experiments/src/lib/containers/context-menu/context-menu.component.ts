import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'ngx-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
  crumbs = List([{ name: 'Dashboard', link: '/dashboard' }, { name: 'Experiments', link: '/dashboard/experiments' }, { name: 'Context Menu' }]);
  constructor() {}

  ngOnInit() {}
}
