//SystemJS.import('app/app.js');
import { App } from 'app/app.js';
import $ from 'jquery';

console.log($.fn.jquery);
console.info('Main Entered');

$(document).ready(function() {
  console.info('Document Ready Fool!');
  
  App.init();
});
