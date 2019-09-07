import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '@env/environment';
// import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

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
