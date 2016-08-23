import UserModel from 'app/user.model';
import $ from 'jquery';

export const App = {
  init: function() {
    console.info('Initialized');
    console.info(UserModel);

    var model = new UserModel();

    console.info(model.toString());
    model.firstname = 'Rex';
    console.info(model.toString());

    console.info($);

    $('p').text(model.toString());
  }
};
