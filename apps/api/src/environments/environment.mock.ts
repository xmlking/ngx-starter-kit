import { IEnvironment } from './ienvironment';
export const environment: IEnvironment = {
  production: true,
  envName: 'mock',

  env: {
    NODE_TLS_REJECT_UNAUTHORIZED: '0',
  },

  server: {
    host: process.env.HOST || '0.0.0.0',
    domainUrl: process.env.DOMAIN_URL || 'http://localhost:3000',
    port: process.env.PORT || 3000,
    globalPrefix: '/api',
  },

  database: {
    type: 'postgres',
    host: process.env.TYPEORM_HOST || 'localhost',
    port: process.env.TYPEORM_PORT ? Number(process.env.TYPEORM_PORT) : 31432,
    database: process.env.TYPEORM_DATABASE || 'postgres',
    username: process.env.TYPEORM_USERNAME || 'postgres',
    password: process.env.TYPEORM_PASSWORD || 'postgres321',
    keepConnectionAlive: true,
    logging: process.env.TYPEORM_LOGGING ? JSON.parse(process.env.TYPEORM_LOGGING) : false,
    synchronize: process.env.TYPEORM_SYNCHRONIZE ? JSON.parse(process.env.TYPEORM_SYNCHRONIZE) : false,
    uuidExtension: 'pgcrypto',
  },

  auth: {
    clientId: process.env.OIDC_CLIENT_ID || '791772336084-vkt37abstm1du92ofdmhgi30vgd7t0oa.apps.googleusercontent.com',
    issuerExternalUrl: process.env.OIDC_ISSUER_EXTERNAL_URL || 'https://accounts.google.com',
    issuerInternalUrl: process.env.OIDC_ISSUER_INTERNAL_URL || 'https://accounts.google.com',
    jwksUri: process.env.OIDC_JWKS_URL || 'https://www.googleapis.com/oauth2/v3/certs',
    additionalQueryStringParams: { scope: 'openid profile email' },
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
    templateDir: 'apps/api/src/assets/email-templates',
  },

  weather: {
    baseUrl: 'https://api.openweathermap.org/data/2.5',
    apiKey: '7cb0f6a068d1de4845c49ba22b74d7cc',
  },

  // Key generation: https://web-push-codelab.glitch.me
  webPush: {
    subject: process.env.VAPID_SUBJECT || 'mailto: sumo@demo.com',
    publicKey:
      process.env.VAPID_PUBLIC_KEY ||
      'BAJq-yHlSNjUqKW9iMY0hG96X9WdVwetUFDa5rQIGRPqOHKAL_fkKUe_gUTAKnn9IPAltqmlNO2OkJrjdQ_MXNg',
    privateKey: process.env.VAPID_PRIVATE_KEY || 'cwh2CYK5h_B_Gobnv8Ym9x61B3qFE2nTeb9BeiZbtMI',
  },
};
