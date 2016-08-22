'use strict';

System.config({
  map: {
    $: './vendor/jquery/dist/jquery.min.js',
    bootstrap: './vendor/bootstrap/dist/js/bootstrap.min.js'
  }
});

System.import('$', 'bootstrap');
