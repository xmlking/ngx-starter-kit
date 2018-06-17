// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  production: false,
  envName: 'dev',

  API_BASE_URL: 'http://localhost:3000/api',
  auth: {
    // clientId: 'kube-tenant',
    // issuer: 'http://localhost:9080/auth/realms/kubernetes'
    clientId: 'is360ui',
    issuer: 'https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/is360'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
