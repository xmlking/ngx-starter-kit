import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceWorkerService } from './core/services/service-worker/service-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private sw: ServiceWorkerService) {}

  ngOnInit() {
    // Check service worker update
    this.sw.checkSWUpdate();
  }
}
