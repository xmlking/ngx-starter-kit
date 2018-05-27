import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { List } from 'immutable';

export interface Crumb {
  name: string;
  link?: string;
}
@Component({
  selector: 'ngx-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  @Input() title: string;
  @Input() crumbs: List<Crumb>;

  constructor() {}

  ngOnInit() {}
}
