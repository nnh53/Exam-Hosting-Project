const path = require("path");

module.exports = function override(config, env) {
  // ...add your webpack config
  config.resolve.fallback = {
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
  };
  return config;
};
