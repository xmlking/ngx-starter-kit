import sharedEnvironment from './base';
import { IEnvironment } from '@env/ienvironment';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: true,
  envName: 'prod',

  DOCS_BASE_URL: 'http://localhost:8000',
  API_BASE_URL: 'https://ngxapi.traefik.k8s/api',
  WS_EVENT_BUS_URL: 'wss://ngxapi.traefik.k8s/eventbus',

  auth: {
    clientId: 'ngxweb',
    issuer: 'https://keycloak.traefik.k8s/auth/realms/ngx',
  },
};
