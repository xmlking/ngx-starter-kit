const jestBase = require('../../jest.config.base.js');
module.exports = {
  ...jestBase,
  "coverageDirectory": "../../dist/apps/webapp-e2e/coverage",
};
