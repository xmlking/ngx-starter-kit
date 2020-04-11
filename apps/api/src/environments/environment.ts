// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { IEnvironment } from './ienvironment';

export const environment: IEnvironment = {
  production: false,
  envName: 'dev',

  env: {
    LOG_LEVEL: 'debug',
    NODE_TLS_REJECT_UNAUTHORIZED: '0',
  },

  ALLOW_WHITE_LIST: ['::ffff:127.0.0.1', '::1'],

  server: {
    host: '0.0.0.0',
    domainUrl: 'http://localhost:3000',
    port: 3000,
    globalPrefix: '/api',
  },

  database: {
    type: 'postgres',
    host: 'localhost',
    port: 31432,
    database: 'postgres',
    username: 'postgres',
    password: 'postgres321',
    keepConnectionAlive: true,
    logging: true,
    synchronize: true,
    uuidExtension: 'pgcrypto',
  },

  auth: {
    clientId: 'ngxapi',
    // issuerExternalUrl: 'https://keycloak.traefik.k8s/auth/realms/ngx',
    // issuerExternalUrl: 'http://localhost:8080/auth/realms/ngx',
    issuerExternalUrl: 'https://accounts.google.com',
    // issuerExternalUrl: 'https://keycloak.kashmora.com/auth/realms/ngx',
    // additionalQueryStringParams:  { scope: 'openid profile email', nonce: '1234578910' }
  },

  email: {
    transport: {
      host: 'mail.google.com',
      port: 25,
      // secure: false
    },
    defaults: {
      from: '"sumo demo" <sumo@demo.com>',
    },
    templateDir: 'apps/api/src/assets/email-templates',
  },

  weather: {
    baseUrl: 'https://samples.openweathermap.org/data/2.5',
    apiKey: 'b6907d289e10d714a6e88b30761fae22',
  },

  // Key generation: https://web-push-codelab.glitch.me
  webPush: {
    subject: 'mailto: sumo@demo.com',
    publicKey: 'BAJq-yHlSNjUqKW9iMY0hG96X9WdVwetUFDa5rQIGRPqOHKAL_fkKUe_gUTAKnn9IPAltqmlNO2OkJrjdQ_MXNg',
    privateKey: 'cwh2CYK5h_B_Gobnv8Ym9x61B3qFE2nTeb9BeiZbtMI',
  },
};
