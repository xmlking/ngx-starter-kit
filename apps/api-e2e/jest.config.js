module.exports = {
  name: 'api-e2e',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/apps/api-e2e',
  globals: {
    'ts-jest': {
      tsConfig: "./tsconfig.e2e.json"
    }
  }
};

