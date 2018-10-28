export const environment = {
  production: true,

  NODE_ENV: 'production',
  DOMAIN_URL: 'http://localhost:3000',
  PORT: 3000,
  GLOBAL_PREFIX: '/api',
  NODE_TLS_REJECT_UNAUTHORIZED: 0,

  TYPEORM_CONNECTION: 'postgres',
  TYPEORM_HOST: 'postgres',
  TYPEORM_PORT: 5432,
  TYPEORM_DATABASE: 'cockpit',
  TYPEORM_USERNAME: 'cockpit',
  TYPEORM_PASSWORD: 'cockpit123',

  TYPEORM_SYNCHRONIZE: false,
  TYPEORM_LOGGING: false,
  TYPEORM_ENTITIES: './dist/**/**.entity.js',

  // OIDC_ISSUER_URL: 'https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/kubernetes',
  // OIDC_CLIENT: 'cockpit',
  OIDC_ISSUER_URL: 'https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/is360',
  OIDC_CLIENT: 'is360ui',

  EMAIL_HOST: 'mail.google.com',
  EMAIL_PORT: 25,
  EMAIL_FROM: '"sumo demo" <sumo@demo.com>',
  EMAIL_TEMPLATE_DIR: 'apps/api/email-templates',
};
