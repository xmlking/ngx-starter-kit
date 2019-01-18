export const environment = {
  production: true,

  NODE_TLS_REJECT_UNAUTHORIZED: 0,

  server: {
    host: process.env.HOST || '0.0.0.0',
    domainUrl: process.env.DOMAIN_URL || 'http://localhost:3000',
    port: process.env.PORT || 3000,
    globalPrefix: '/api',
  },

  database: {
    type: 'postgres',
    host: process.env.TYPEORM_HOST || 'postgres',
    port: process.env.TYPEORM_PORT ? Number(process.env.TYPEORM_PORT) : 5432,
    database: process.env.TYPEORM_DATABASE || 'cockpit',
    username: process.env.TYPEORM_USERNAME || 'cockpit',
    password: process.env.TYPEORM_PASSWORD || 'cockpit123',
    keepConnectionAlive: true,
    logging: process.env.TYPEORM_LOGGING ? JSON.parse(process.env.TYPEORM_LOGGING) : false,
    synchronize: false,
  },

  auth: {
    issuer:
      process.env.OIDC_ISSUER_URL || 'https://keycloak-ngx.1d35.starter-us-east-1.openshiftapps.com/auth/realms/ngx',
    clientId: process.env.OIDC_CLIENT_ID || 'ngxapi',
  },

  email: {
    transport: {
      host: process.env.EMAIL_HOST || 'mail.google.com',
      port: process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 25,
      secure: process.env.EMAIL_SECURE ? JSON.parse(process.env.EMAIL_SECURE) : false,
      auth: {
        user: process.env.EMAIL_AUTH_USER || 'auth_user',
        pass: process.env.EMAIL_AUTH_PASS || 'auth_pass',
      },
    },
    defaults: {
      from: process.env.EMAIL_FROM ? process.env.EMAIL_FROM : '"sumo demo" <sumo@demo.com>',
    },
    templateDir: process.env.EMAIL_TEMPLATE_DIR || `${__dirname}/assets/email-templates`,
  },

  // Key generation: https://web-push-codelab.glitch.me
  webPush: {
    subject: process.env.VAPID_SUBJECT || 'mailto: sumo@demo.com',
    publicKey:
      process.env.VAPID_PUBLIC_KEY ||
      'BAJq-yHlSNjUqKW9iMY0hG96X9WdVwetUFDa5rQIGRPqOHKAL_fkKUe_gUTAKnn9IPAltqmlNO2OkJrjdQ_MXNg',
    privateKey: process.env.VAPID_PRIVATE_KEY || 'cwh2CYK5h_B_Gobnv8Ym9x61B3qFE2nTeb9BeiZbtMI',
  },
  kubernetes: {
    CLUSTER1: {
      baseUrl: 'https://cluster1:8080',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: process.env.CLUSTER1_SERVICE_ACCOUNT_TOKEN || 'AAAAAAAAAAAA',
    },
    CLUSTER2: {
      baseUrl: 'https://cluster2:8080',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: process.env.CLUSTER2_SERVICE_ACCOUNT_TOKEN || 'BBBBBBBBBBBB',
    },
    CLUSTER3: {
      baseUrl: 'https://cluster3:8080',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: process.env.CLUSTER3_SERVICE_ACCOUNT_TOKEN || 'CCCCCCCCCCCCC',
    },
    CLUSTER4: {
      baseUrl: 'https://cluster4:8080',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: process.env.CLUSTER4_SERVICE_ACCOUNT_TOKEN || 'DDDDDDDDDDDDD',
    },
  },
};
