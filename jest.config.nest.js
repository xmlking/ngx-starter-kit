module.exports = {
  "moduleFileExtensions": ["js", "json", "ts"],
  "testRegex": ".spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  collectCoverage: true,
  coverageReporters: ['html'],
  "testEnvironment": "node"
};
