module.exports = {
  name: "api-e2e",
  preset: "../../jest.config.js",
  testMatch: ["**/+(*.)+(e2e-spec|e2e-test).+(ts|js)?(x)"],
  coverageDirectory: "../../coverage/apps/api-e2e",
};
