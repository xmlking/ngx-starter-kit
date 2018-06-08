import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { setAutoFreeze } from "immer";

import { AppModule } from './app/app.module';
import { environment } from '@env/environment';

if (environment.production) {
  enableProdMode();
  // setAutoFreeze(false)
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
