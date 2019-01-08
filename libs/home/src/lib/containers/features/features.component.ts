import { Component, Inject, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@ngx-starter-kit/animations';
import { WINDOW } from '@ngx-starter-kit/core';

/** @dynamic */
@Component({
  selector: 'ngx-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  constructor(@Inject(WINDOW) private window: Window) {}

  ngOnInit() {}

  openLink(link: string) {
    this.window.open(link, '_blank');
  }
}
