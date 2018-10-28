// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  NODE_ENV: 'development',
  DOMAIN_URL: 'http://localhost:3000',
  PORT: 3000,
  GLOBAL_PREFIX: '/api',
  NODE_TLS_REJECT_UNAUTHORIZED: 0,
  ALLOW_WHITE_LIST: '::ffff:127.0.0.1,::1',

  LOG_LEVEL: 'debug',

  TYPEORM_CONNECTION: 'postgres',
  TYPEORM_HOST: 'localhost',
  TYPEORM_PORT: 5432,
  TYPEORM_DATABASE: 'cockpit',
  TYPEORM_USERNAME: 'cockpit',
  TYPEORM_PASSWORD: 'cockpit123',

  TYPEORM_SYNCHRONIZE: true,
  TYPEORM_LOGGING: true,
  TYPEORM_ENTITIES: './**/**.entity{.ts,.js}',

  // OIDC_ISSUER_URL: 'https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/kubernetes',
  // OIDC_CLIENT: 'cockpit',
  OIDC_ISSUER_URL: 'https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/is360',
  OIDC_CLIENT: 'is360ui',

  EMAIL_HOST: 'mail.google.com',
  EMAIL_PORT: 25,
  EMAIL_FROM: '"sumo demo" <sumo@demo.com>',
  EMAIL_TEMPLATE_DIR: 'apps/api/email-templates',
};
