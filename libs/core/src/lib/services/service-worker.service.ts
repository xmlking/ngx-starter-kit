import { Inject, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '@env/environment';
import { WINDOW } from './window.token';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class ServiceWorkerService {
  constructor(private swUpdate: SwUpdate, @Inject(WINDOW) private window: Window, private snackBar: MatSnackBar) {}

  checkSWUpdate(): void {
    if (environment.production) {
      // Subscribe new worker is available
      this.swUpdate.available.subscribe(event => {
        // update available: ask the user to reload
        const snackBarRef = this.snackBar
          .open('Newer version of the app is available', 'Refresh');

        snackBarRef.onAction().subscribe(() => {
          window.location.reload(true);
        });
      });
      // Check for new version
      this.swUpdate.checkForUpdate();
    }
  }
}
