import App from 'app/app';

console.log($.fn.jquery);
console.info('Main Entered');
console.info(App);

App.init();

$(document).ready(function() {
  console.info('Document Ready Fool!');
  
  App.init();
});
