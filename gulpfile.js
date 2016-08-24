'use strict';

var config = require('./gulp.config')();
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

var port = process.env.PORT || config.defaultPort;

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
    buildOptions: {
      minify: true,
      mangle: true
    },
    bundles: [
      { src: 'main.js', dst: 'build.js'},
    ],
    baseUrl: config.client,
    bundleSfx: true,
    defaultJSExtensions: true
  })
  .pipe($.uglify())
  .pipe(gulp.dest(config.build));
});

/**
 * Copies over the html files to the build folder.
 */
gulp.task('build-html', function() {
  return gulp.src(config.client + 'index.html')
    .pipe($.useref())
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
 * Serves the app using Express Server for development.
 */
gulp.task('serve-dev', function() {
  // true for isDev
  serve(true);
});

/**
 * Serves the build version of the application.
 */
gulp.task('serve-build', function() {
  serve(false);
});

///////////////////////
/**
 * Serves the server to the user.
 */
function serve(isDev) {
  var nodeOptions = getNodeOptions(isDev);

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
}

/**
 * Gets the node server options.
 */
function getNodeOptions(isDev) {
  return {
    script: config.nodeServer,
    delayTime: 1,
    env: {
      'PORT': port,
      'NODE_ENV': isDev ? 'dev' : 'build'
    },
    watch: [config.server]
  };
}
