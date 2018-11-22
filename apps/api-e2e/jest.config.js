module.exports = {
  name: 'api-e2e',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/apps/api-e2e',
  globals: {
    'ts-jest': {
      tsConfig: 'apps/api-e2e/tsconfig.e2e.json',
    },
  },
};
