import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  // TODO: production: true,
  production: false,
  envName: 'mock',

  API_BASE_URL: 'http://localhost:3000/api',
  auth: {
    clientId: 'is360ui',
    issuer: 'http://localhost:8080/auth/realms/is360',
    proxyLogoutUrl: '/auth/realms/is360/protocol/openid-connect/logout'
  }
};
