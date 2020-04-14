import { Component, OnInit } from '@angular/core';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';

// card layout inspection: https://cloud.google.com/deployment-manager/docs
@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [{ name: 'Dashboard', link: '/dashboard' }];

  constructor() {}

  ngOnInit() {}
}
