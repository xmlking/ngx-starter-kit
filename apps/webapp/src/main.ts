import { ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from '@env/environment';

if (environment.production) {
  enableProdMode();
  // disableDebugTools();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // Profile Change Detection
  // .then(ref => {
  //   const applicationRef = ref.injector.get(ApplicationRef);
  //   const appComponent = applicationRef.components[0];
  //   enableDebugTools(appComponent);
  // })
  .catch(err => console.error(err));
