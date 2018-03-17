import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  production: true,
  envName: 'mock',

  API_BASE_URL: 'http://localhost:3000/api',
  auth: {
    clientId: 'is360ui',
    issuer: 'https://keycloak-is360.7e14.starter-us-west-2.openshiftapps.com/auth/realms/is360'
  }
};
