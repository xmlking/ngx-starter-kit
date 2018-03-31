import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface Crumb {
  name: string;
  link?: string;
}
@Component({
  selector: 'nxtk-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  @Input() title: string;
  @Input() crumbs: Crumb[];

  constructor() {}

  ngOnInit() {}
}
