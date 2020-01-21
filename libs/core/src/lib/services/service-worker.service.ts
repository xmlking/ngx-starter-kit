import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '@env/environment';
import { WINDOW } from './window.token';

/** @dynamic */
@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerService {
  constructor(private swUpdate: SwUpdate, @Inject(WINDOW) private window: Window, private snackBar: MatSnackBar) {}

  // TODO: move to appState/eventBus?
  checkSWUpdate(): void {
    if (environment.production) {
      // Subscribe new worker is available
      this.swUpdate.available.subscribe(event => {
        console.log('Current version is', event.current);
        console.log('Available version is', event.available);
        // update available: ask the user to reload
        const snackBarRef = this.snackBar.open('Newer version of the app is available', 'Refresh');

        snackBarRef.onAction().subscribe(() => {
          window.location.reload();
        });
      });

      this.swUpdate.activated.subscribe(event => {
        console.log('Old version was', event.previous);
        console.log('New version is', event.current);
      });

      // Check for new version
      this.swUpdate.checkForUpdate();
    }
  }
}
