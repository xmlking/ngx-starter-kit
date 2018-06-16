const jestBase = require('../../jest.config.base.js');
module.exports = {
  ...jestBase,
  "coverageDirectory": "../../dist/apps/api/coverage",
};
