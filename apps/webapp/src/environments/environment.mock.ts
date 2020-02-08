import { IEnvironment } from '@env/ienvironment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/in-memory-data.service';
import sharedEnvironment from './base';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: true,
  envName: 'mock',

  REMOTE_CONFIG_URL: '/ngx-starter-kit/assets/data/ui-config.json',
  DOCS_BASE_URL: 'http://localhost:8000',
  API_BASE_URL: 'http://localhost:3000/api',
  WS_EVENT_BUS_URL: 'ws://localhost:3000/eventbus',

  plugins: [
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true,
      delay: 1000,
      // apiBase: 'api'
    }),
  ],

  auth: {
    // clientId: 'ngxweb',
    // issuer: 'https://keycloak.traefik.k8s/auth/realms/ngx',
    clientId: '791772336084-vkt37abstm1du92ofdmhgi30vgd7t0oa.apps.googleusercontent.com',
    issuer: 'https://accounts.google.com',
  },
};
