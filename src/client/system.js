'use strict';

System.config({
  map: {
    jquery: './vendor/jquery/dist/jquery.min.js',
    bootstrap: './vendor/bootstrap/dist/js/bootstrap.min.js'
  }
});

System.import('jquery', 'bootstrap');
