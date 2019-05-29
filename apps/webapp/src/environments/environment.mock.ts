import sharedEnvironment from './base';
import { IEnvironment } from '@env/ienvironment';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: true,
  envName: 'mock',

  REMOTE_CONFIG_URL: '/ngx-starter-kit/assets/data/ui-config.json',
  DOCS_BASE_URL: 'http://localhost:8000',
  API_BASE_URL: 'http://localhost:3000/api',
  WS_EVENT_BUS_URL: 'ws://localhost:3000/eventbus',

  auth: {
    // clientId: 'ngxweb',
    // issuer: 'https://keycloak.traefik.k8s/auth/realms/ngx',
    clientId: '791772336084-vkt37abstm1du92ofdmhgi30vgd7t0oa.apps.googleusercontent.com',
    issuer: 'https://accounts.google.com'
  },
};
