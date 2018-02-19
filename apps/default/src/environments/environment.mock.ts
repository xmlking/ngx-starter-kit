import sharedEnvironment from './base';

export const environment = {
  ...sharedEnvironment,
  production: false,
  envName: 'mock',

  API_BASE_URL: 'http://localhost:3000/api'
};
