import { Inject, Optional, Injectable } from '@angular/core';
import { PlatformLocation, APP_BASE_HREF } from '@angular/common';

export class SvgViewerConfig {
  baseUrl: string;
}

@Injectable()
export class SvgViewerDefaultConfig extends SvgViewerConfig {
  constructor(
    @Optional()
    @Inject(APP_BASE_HREF)
    appBase: string,
    @Optional() location: PlatformLocation,
  ) {
    super();

    if (appBase !== null) {
      this.baseUrl = appBase;
    } else if (location !== null) {
      this.baseUrl = location.getBaseHrefFromDOM();
    }
  }
}
