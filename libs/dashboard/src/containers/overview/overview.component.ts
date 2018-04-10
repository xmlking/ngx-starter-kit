import { Component, OnInit } from '@angular/core';
import { Crumb } from '@nx-starter-kit/breadcrumbs';

@Component({
  selector: 'nxtk-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  crumbs: Crumb[] = [{ name: 'Dashboard', link: '/dashboard' }];

  constructor() {}

  ngOnInit() {}
}
