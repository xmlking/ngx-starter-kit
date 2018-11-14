// src/environments/base.ts
const packageJson = require('../../../../package.json');
export default {
  appName: 'Ngx Starter Kit',
  secret: 'SECRET',
  apiToken: 'SECRET_TOKEN',
  dialogFlow: {
    apiToken: '37808bf14a19406cbe2a50cfd1332dd3',
    // apiToken: '528e10cbdec04c78a0d0147de041dea4',
    sessionId: 'sumodemo',
  },
  webPush: {
    publicVapidKey: 'BAJq-yHlSNjUqKW9iMY0hG96X9WdVwetUFDa5rQIGRPqOHKAL_fkKUe_gUTAKnn9IPAltqmlNO2OkJrjdQ_MXNg'
  },
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngxs: packageJson.dependencies['@ngxs/store'],
    material: packageJson.dependencies['@angular/material'],
    flexLayout: packageJson.dependencies['@angular/flex-layout'],
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    // typescript: packageJson.devDependencies['typescript'],
    typescript: packageJson.dependencies['typescript'],
  },
};
