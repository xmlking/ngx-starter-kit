import { Component, OnInit } from '@angular/core';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';

@Component({
  selector: 'ngx-led-demo',
  templateUrl: './led-demo.component.html',
  styleUrls: ['./led-demo.component.scss'],
})
export class LedDemoComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Led Demo' },
  ];
  constructor() {}

  ngOnInit() {}
}
