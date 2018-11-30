// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  NODE_TLS_REJECT_UNAUTHORIZED: 0,
  ALLOW_WHITE_LIST: ['::ffff:127.0.0.1', '::1'],
  LOG_LEVEL: 'debug',

  server: {
    host: '0.0.0.0',
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
    subject: 'mailto: sumo@demo.com',
    publicKey: 'BAJq-yHlSNjUqKW9iMY0hG96X9WdVwetUFDa5rQIGRPqOHKAL_fkKUe_gUTAKnn9IPAltqmlNO2OkJrjdQ_MXNg',
    privateKey: 'cwh2CYK5h_B_Gobnv8Ym9x61B3qFE2nTeb9BeiZbtMI',
  },
  kubernetes: {
    CLUSTER1: {
      baseUrl: 'https://k8s-prod-ctc-aci.optum.com:16443',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: 'AAAAAAAAAAAA',
    },
    CLUSTER2: {
      baseUrl: 'https://k8s-prod-elr-aci.optum.com:16443',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: 'BBBBBBBBBBBB',
    },
    CLUSTER3: {
      baseUrl: 'https://k8s-prod-ptc-aci.optum.com:16443',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: 'CCCCCCCCCCCCC',
    },
    CLUSTER4: {
      baseUrl: 'https://10.176.22.126:6443',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: 'DDDDDDDDDDDDD',
    },
  },
};
