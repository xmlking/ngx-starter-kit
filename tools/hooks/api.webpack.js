var IgnorePlugin = require("webpack").IgnorePlugin;

module.exports = (config, context) => {
  // extend, mutate, create a new config (whatever you want)
  config.plugins = [
    ...config.plugins,
    new IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          "@nestjs/microservices",
          "@nestjs/platform-express",
          "cache-manager",
          "class-validator",
          "class-transformer",
          "clone-deep",
          "mongoose",
          "typeorm",
          "oracledb",
          "react-native",
          "sqlite3",
          "pg-native",
          "socket.io",
          "cli-highlight",
          "mongodb-core",
          "grpc",
          "pug-filters",
          "express",
          "cacheable-request",
          "ws",
          "sharp",
          "electron",
          "hiredis",
          "uws",
          "mqtt",
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource);
        } catch (err) {
          return true;
        }
        return false;
      },
    }),
  ];
  return config;
};
