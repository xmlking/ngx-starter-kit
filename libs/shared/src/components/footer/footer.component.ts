import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../apps/default/src/environments/environment';
const { version: appVersion } = require('../../../../../package.json');

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  environment = environment.envName;
  constructor() {}

  ngOnInit() {}

  get version() {
    if (appVersion) {
      return appVersion;
    }
    return '';
  }
}
