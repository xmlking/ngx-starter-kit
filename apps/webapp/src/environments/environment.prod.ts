import sharedEnvironment from './base';
import { IEnvironment } from '@env/ienvironment';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: true,
  envName: 'prod',

  DOCS_BASE_URL: 'http://localhost:8000',
  API_BASE_URL: 'http://localhost:3000/api',
  WS_EVENT_BUS_URL: 'ws://localhost:3000/eventbus',

  auth: {
    clientId: 'ngxapp',
    issuer: 'https://keycloak-ngx.1d35.starter-us-east-1.openshiftapps.com/auth/realms/ngx',
  },
};
