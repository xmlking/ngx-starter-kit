import * as packageJson from '../../../../package.json';

const base = document.querySelector('base');

export default {
  appName: 'Ngx Starter Kit',
  secret: 'SECRET',
  apiToken: 'SECRET_TOKEN',
  baseUrl: (base && base.href) || window.location.origin + '/',
  dialogFlow: {
    baseUrl: 'https://api.dialogflow.com/v1/query?v=20150910',
    apiToken: '37808bf14a19406cbe2a50cfd1332dd3',
    baseUrlV2: 'https://dialogflow.googleapis.com/v2beta1/projects/',
    apiTokenV2: '528e10cbdec04c78a0d0147de041dea4',
  },
  webPush: {
    // Key generation: https://web-push-codelab.glitch.me
    publicKey: 'BAJq-yHlSNjUqKW9iMY0hG96X9WdVwetUFDa5rQIGRPqOHKAL_fkKUe_gUTAKnn9IPAltqmlNO2OkJrjdQ_MXNg',
  },
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngxs: packageJson.dependencies['@ngxs/store'],
    material: packageJson.dependencies['@angular/material'],
    flexLayout: packageJson.dependencies['@angular/flex-layout'],
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies.typescript,
  },
};
