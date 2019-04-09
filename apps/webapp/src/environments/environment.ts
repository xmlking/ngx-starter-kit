// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import sharedEnvironment from './base';
import { IEnvironment } from '@env/ienvironment';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: false,
  envName: 'dev',

  DOCS_BASE_URL: 'http://localhost:8000',
  API_BASE_URL: 'http://localhost:3000/api',
  WS_EVENT_BUS_URL: 'ws://localhost:3000/eventbus',

  auth: {
    clientId: 'ngxweb',
    // issuer: 'http://localhost:8080/auth/realms/ngx',
    issuer: 'https://keycloak-ngx1.1d35.starter-us-east-1.openshiftapps.com/auth/realms/ngx',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
