'use strict';

System.config({
  baseURL: './',
  transpiler: 'plugin-babel',
  babelOption: {
    plugins: ['transform-es2015-modules-systemjs'],
    presets: ['es2015']
  },
  map: {
    bootstrap: 'vendor/bootstrap/dist/js/bootstrap.min.js',
    jquery: 'vendor/jquery/dist/jquery.min.js',
    babel: 'vendor/babel-standalone/babel.js',
    'plugin-babel': 'vendor/systemjs-plugin-babel/plugin-babel.js',
    'systemsjs-babel-build': 'vendor/systemjs-plugin-babel/systemjs-babel-browser.js'*/
  },
  meta: {
    /*]babel: { format: 'global', exports: 'babel' }*/
  }
});
