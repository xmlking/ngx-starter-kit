import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ServiceWorkerService } from '@ngx-starter-kit/core';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // tslint:disable-next-line: use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(private sw: ServiceWorkerService, public meta: Meta) {
    meta.addTags([
      { charset: 'UTF-8' },
      { name: 'description', content: 'NGX Starter Kit' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'TypeScript, Angular' },
    ]);
  }

  ngOnInit() {
    // Check service worker update
    this.sw.checkSWUpdate();
  }
}
