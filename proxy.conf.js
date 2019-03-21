const rewriteFn = (path, req) => {
  switch (true) {
    case  path.startsWith('/back1/api'):
      return path.replace('/back1/api', '/api');
    case  path.startsWith('/back1/api2'):
      return path.replace('/back1/api2', '/api2');
    case  path.startsWith('/back2/api'):
      return path.replace('/back2/api', '/api');
    case  path.startsWith('/back2/api2'):
      return path.replace('/back2/api2', '/api2');
    default:
      return path;
  }
};

const PROXY_CONFIG = [
  {
    context: [
      "/auth/realms"
    ],
    'target': 'https://keycloak-ngx1.1d35.starter-us-east-1.openshiftapps.com',
    'secure': false,
    'logLevel': 'debug',
    // 'changeOrigin': true,
  },
  {
    context: [
      "/get"
    ],
    'target': 'https://httpbin.org',
    'secure': false,
    'logLevel': 'debug',
    'changeOrigin': true,
  },
  {
    context: [
      "/api"
    ],
    'target': 'http://localhost:3000',
    'secure': false
  },
  {
    context: [
      "/back1/api",
      "/back1/api2",
    ],
    'target': 'https://prod-back1-api.sumo.com:3001',
    'secure': false,
    'logLevel': 'debug',
    "pathRewrite": rewriteFn,
    'onProxyReq': function (proxyReq, req, res) {
      proxyReq.setHeader('Authorization', 'Bearer ' + 'my_backend1_api_key');
    },
    'changeOrigin': true,
  },
  {
    context: [
      "/back2/api",
      "/back2/api2",
    ],
    'target': 'https://prod-back2-api.sumo.com:3002',
    'secure': false,
    'logLevel': 'debug',
    "pathRewrite": rewriteFn,
    'onProxyReq': function (proxyReq, req, res) {
      proxyReq.setHeader('Authorization', 'Bearer ' + 'my_backend2_api_key');
    },
    'changeOrigin': true,
  }
];

module.exports = PROXY_CONFIG;
