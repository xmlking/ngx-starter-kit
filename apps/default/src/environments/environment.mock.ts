import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  // TODO: production: true,
  production: false,
  envName: 'mock',

  API_BASE_URL: 'http://localhost:3000/api',
  auth: {
    clientId: 'is360ui',
    issuer: 'https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com/auth/realms/is360',
    proxyLogoutUrl: '/auth/realms/is360/protocol/openid-connect/logout'
  }
};
