module.exports = function() {
  'use strict';

  var build = './build/';
  var client = './src/client/';
  var clientApp = client + 'app/';
  var root = './';
  var server = './src/server/';

  var config = {
    build: build,
    client: client,
    server: server,
    clientApp: clientApp,
    root: root,
    nodeServer: server + 'app.js',
    defaultPort: '8001',
    tmp: './tmp/'
  };

  return config;
};
