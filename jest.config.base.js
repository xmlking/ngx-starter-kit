module.exports = {
  "moduleFileExtensions": ["js", "json", "ts"],
  "globals": {
    "ts-jest": {
      "tsConfigFile": "tsconfig.spec.json"
    },
  //   // "__TRANSFORM_HTML__": true,
  //   // "testResultsProcessor": "./node_modules/jest-html-reporter"
  },
  collectCoverage: true,
  "coverageThreshold": {
    "global": {
      "branches": 60,
      "functions": 60,
      "lines": 60,
      "statements": -20
    }
  },
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "testRegex": ".spec.ts$",
  // "moduleNameMapper": {
  //   "@ngx-starter-kit/(.*)": "<rootDir>/libs/$1"
  // }
  projects: [
    'apps/*',
    // 'libs/*'
  ],
  testPathIgnorePatterns: [
    'apps/webapp',
    'apps/webapp-e2e'
  ],
};
