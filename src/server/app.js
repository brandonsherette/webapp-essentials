'use strict';

var express = require('express');
var app = express();
var port = 8001;

app.use(express.static('./tmp'));
app.use(express.static('./jspm_packages'));
app.use(express.static('./src/client'));
app.use(express('./'));
// any deep link calls should return index.html
app.use('/*', express.static('./src/client/index.html'));

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
