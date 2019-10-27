import { IEnvironment } from '@env/ienvironment';
import sharedEnvironment from './base';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: true,
  envName: 'prod',

  REMOTE_CONFIG_URL: '/assets/data/ui-config.json',
  DOCS_BASE_URL: 'http://localhost:8000',
  // API_BASE_URL: 'https://ngxapi.traefik.k8s/api',
  // WS_EVENT_BUS_URL: 'wss://ngxapi.traefik.k8s/eventbus',
  API_BASE_URL: 'https://api.kashmora.com/api',
  WS_EVENT_BUS_URL: 'wss://api.kashmora.com/eventbus',

  plugins: [],

  auth: {
    clientId: 'ngxweb',
    // issuer: 'https://keycloak.traefik.k8s/auth/realms/ngx',
    issuer: 'https://keycloak.kashmora.com/auth/realms/ngx',
  },
};
