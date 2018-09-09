import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  production: true,
  envName: 'prod',

  API_BASE_URL: 'http://localhost:3000/api',
  WS_EVENT_BUS_URL: 'ws://localhost:3000/eventbus',
  auth: {
    clientId: 'is360ui',
    issuer: 'http://localhost:8080/auth/realms/is360',
  },
};
