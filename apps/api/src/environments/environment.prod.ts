export const environment = {
  production: true,

  NODE_TLS_REJECT_UNAUTHORIZED: 0,

  server: {
    host: 'localhost',
    domainUrl: 'http://localhost:3000',
    port: 3000,
    globalPrefix: '/api',
  },

  database: {
    type: 'postgres',
    host: process.env.TYPEORM_HOST || 'postgres',
    port: process.env.TYPEORM_PORT ? Number(process.env.TYPEORM_PORT) : 5432,
    database: process.env.TYPEORM_DATABASE || 'cockpit',
    username: process.env.TYPEORM_USERNAME || 'cockpit',
    password:  process.env.TYPEORM_PASSWORD || 'cockpit123',
    keepConnectionAlive: true,
    logging: process.env.TYPEORM_LOGGING ? JSON.parse(process.env.TYPEORM_LOGGING) : false,
    synchronize: false,
  },

  auth: {
    issuer: process.env.OIDC_ISSUER_URL || 'https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/is360',
    clientId: process.env.OIDC_CLIENT_ID || 'is360ui',
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
    templateDir:  process.env.EMAIL_TEMPLATE_DIR || `${__dirname}/assets/email-templates`,
  },

  webPush: {
    publicVapidKey: 'BAJq-yHlSNjUqKW9iMY0hG96X9WdVwetUFDa5rQIGRPqOHKAL_fkKUe_gUTAKnn9IPAltqmlNO2OkJrjdQ_MXNg',
    privateVapidKey: 'cwh2CYK5h_B_Gobnv8Ym9x61B3qFE2nTeb9BeiZbtMI',
  },
};
