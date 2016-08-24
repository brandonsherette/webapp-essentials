'use strict';

var config = require('./gulp.config')();
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

/**
 * Builds out all app assets into the build folder. Cleans old build data before building everything back up.
 */
gulp.task('build', ['clean-build', 'bundle-app', 'build-html', 'build-images', 'build-styles'], function() {
  console.log('Build Completed!');
  console.log('build can be found @ ' + config.build);
});

/**
 * Bundles the app in a single js file to be deployed in the build folder.
 */
gulp.task('bundle-app', function() {
  // TODO: Add version number to build and incrementations
  // this will force browser to get the most recent copy of the build

  return $.jspmBuild({
    bundles: [
      { src: 'main.js', dst: 'build.js'},
    ],
    baseUrl: config.client,
    bundleSfx: true,
    defaultJSExtensions: true
  })
  .pipe(gulp.dest(config.build));
});

/**
 * Copies over the html files to the build folder.
 */
gulp.task('build-html', function() {
  return gulp.src(config.client + 'index.html')
    .pipe(gulp.dest(config.build));
});

/**
 * Copies over the images folder to the build folder.
 */
gulp.task('build-images', function() {
  return gulp.src(config.client + 'images/**/*')
    .pipe(gulp.dest(config.build + 'images/'));
});

/**
 * Builds the styles and places them in the build folder.
 */
gulp.task('build-styles', function() {
  // TODO: add building sass
  return gulp.src(config.client + 'images/**/*')
    .pipe(gulp.dest(config.build + 'images'));
});

/**
 * Cleans the build folder.
 */
gulp.task('clean-build', function(done) {
  del(config.build + '**/*', done);
});

/**
 * Serves the app using Express Server. Currently only supports Development.
 */
gulp.task('serve', function() {
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
