const PROXY_CONFIG = {
  "/auth/realms": {
    "target": "https://myroute-is360.a3c1.starter-us-west-1.openshiftapps.com",
    "secure": false,
    "logLevel": "debug",
    // "changeOrigin": true,
  }
};

module.exports = PROXY_CONFIG;
