import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface Crumb {
  name: string;
  link?: string;
}
@Component({
  selector: 'ngx-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  @Input()
  readonly title: string;
  @Input()
  crumbs: ReadonlyArray<Crumb>;

  constructor() {}

  ngOnInit() {}
}
