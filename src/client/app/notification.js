var Notification = (function($) {
  // return API
  return {
    notify: notify
  };

  function notify(msg) {
    let html = '<p class="notification">' + msg + '</p>';

    $('body').append(html);
  }
}(jQuery));

export default Notification;
