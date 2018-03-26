// src/environments/base.ts
const packageJson = require('../../../../package.json');
export default {
  appName: 'Nx Starter Kit',
  secret: 'SECRET',
  apiToken: 'SECRET_TOKEN',
  googleApiKey: 'AIzaSyBd9CQIkyUJ4vQCKEhScUiV8hiBJ4vLl9E',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngxs: packageJson.dependencies['@ngxs/store'],
    material: packageJson.dependencies['@angular/material'],
    flexLayout: packageJson.dependencies['@angular/flex-layout'],
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript']
  }
};
