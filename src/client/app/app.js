import UserModel from 'app/user.model';
import Notification from 'app/notification';

let App = (function() {
  return {
    init: init
  };

  function init() {
    console.info('App Enter!');
    console.info('Initialized');
    console.info(UserModel);

    var model = new UserModel();

    console.info(model.toString());
    model.firstname = 'Rex';
    console.info(model.toString());

    console.info($);

    $('p').text(model.toString());

    Notification.notify('Hello World');
  }
}());

export default App;
