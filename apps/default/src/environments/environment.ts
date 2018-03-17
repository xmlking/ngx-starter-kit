// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  production: false,
  envName: 'dev',

  API_BASE_URL: 'https://is360api-grid-ms-is360-phase-2.ocp-ctc-core-nonprod.optum.com/api',
  auth: {
    clientId: 'is360ui',
    //issuer: 'http://localhost:8080/auth/realms/is360'
    issuer: 'https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/is360'
  }
};
