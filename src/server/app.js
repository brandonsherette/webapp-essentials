'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8001;
var environment = process.env.NODE_ENV;

switch(environment) {
  case 'dev':
    console.log('EXPRESS - DEV');
    app.use(express.static('./src/client'));
    app.use(express('./'));
    // any deep link calls should return index.html
    app.use('/*', express.static('./src/client/index.html'));

    break;

  case 'build':
    console.log('Express - BUILD');
    app.use(express.static('./build'));
    // any deep link calls should return index.html
    app.use('/*', express.static('./build/index.html'));

    break;
}

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
