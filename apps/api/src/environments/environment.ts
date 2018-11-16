// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  NODE_TLS_REJECT_UNAUTHORIZED: 0,
  ALLOW_WHITE_LIST: ['::ffff:127.0.0.1', '::1'],
  LOG_LEVEL: 'debug',

  server: {
    host: 'localhost',
    domainUrl: 'http://localhost:3000',
    port: 3000,
    globalPrefix: '/api',
  },

  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'cockpit',
    username: 'cockpit',
    password: 'cockpit123',
    keepConnectionAlive: true,
    logging: true,
    synchronize: true,
  },

  auth: {
    // issuer: 'https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/kubernetes',
    // clientId: 'cockpit',
    issuer: 'https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/is360',
    clientId: 'is360ui',
  },

  email: {
    transport: {
      host: 'mail.google.com',
      port: 25,
    },
    defaults: {
      from: '"sumo demo" <sumo@demo.com>',
    },
    templateDir: 'apps/api/src/assets/email-templates',
  },

  // Key generation: https://web-push-codelab.glitch.me
  webPush: {
    publicVapidKey: 'BAJq-yHlSNjUqKW9iMY0hG96X9WdVwetUFDa5rQIGRPqOHKAL_fkKUe_gUTAKnn9IPAltqmlNO2OkJrjdQ_MXNg',
    privateVapidKey: 'cwh2CYK5h_B_Gobnv8Ym9x61B3qFE2nTeb9BeiZbtMI',
  },
};
