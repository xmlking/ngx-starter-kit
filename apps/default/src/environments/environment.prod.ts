import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  production: true,
  envName: 'prod',

  API_BASE_URL: 'http://localhost:3000/api'
};
