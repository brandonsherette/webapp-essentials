'use strict';

var config = require('./gulp.config')();
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('clean-tmp', function(done) {
  del(config.tmp + '**/*', done);
});

gulp.task('prepare-vendor', function() {
  // TODO: prepare vendor files dynamically by using config file
  var vendorFiles = [
    './node_modules/bootstrap/dist/**/*',
    './node_modules/jquery/dist/**/*',
    './node_modules/systemjs/dist/**/*'
  ];

  // move over jquery and bootstrap
  return gulp.src(vendorFiles, {base: './node_modules/'})
    .pipe(gulp.dest(config.tmp + 'vendor'));
});

gulp.task('serve', ['prepare-vendor'], function() {
  var nodeOptions = getNodeOptions();

  return $.nodemon(nodeOptions)
    .on('restart', [], function() {
      console.log('*** NODEMON RESTARTED');
    })
    .on('start', function() {
      log('*** NODEMON STARTED');
      startBrowserSync();
    })
    .on('crash', function() {
      console.log('*** NODEMON CRASHED')
    })
    .on('exit', function() {
      console.log('*** NODEMON EXITED');
    })
});

///////////////////////

/**
 * Gets the node server options.
 */
function getNodeOptions() {
  return {
    script: config.nodeServer,
    delayTime: 1,
    watch: [config.server]
  };
}
