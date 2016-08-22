module.exports = function() {
  'use strict';

  var client = './src/client/';
  var server = './src/server/';
  var clientApp = client + 'app/';
  var root = './';

  var config = {
    client: client,
    server: server,
    clientApp: clientApp,
    root: root,
    nodeServer: server + 'app.js',
    defaultPort: '8001'
  };

  return config;
};
