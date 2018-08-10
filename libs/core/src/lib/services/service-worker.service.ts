import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  constructor(private swUpdate: SwUpdate /*private modalService: NgbModal*/) {}

  checkSWUpdate(): void {
    if (environment.production) {
      // Subscribe new worker is available
      this.swUpdate.available.subscribe(() => {
        // update available: ask the user to reload
        if (window.confirm('A new version has been released. Do you want to update?')) {
          window.location.reload(true);
        }

        // this.modalService.open(this.modalContent).result.then(
        //   () => this.swUpdate.activateUpdate()
        //     .then(() => document.location.reload()), // load the update
        //   () => {} // do nothing if the user wants to refresh later
        // )
      });
      // Check for new version
      this.swUpdate.checkForUpdate();
    }
  }
}
