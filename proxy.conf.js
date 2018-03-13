const PROXY_CONFIG = {
  "/auth/realms": {
    "target": "http://localhost:8080",
    "secure": false,
    "logLevel": "debug",
    // "changeOrigin": true,
  }
};

module.exports = PROXY_CONFIG;
