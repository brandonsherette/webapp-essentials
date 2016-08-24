System.register('app/user.model.js', [], function (_export) {
    'use strict';

    function UserModel() {
        this.firstname = 'Bob';
        this.lastname = 'Smith';
        this.toString = function () {
            return this.firstname + ' ' + this.lastname;
        };
    }

    return {
        setters: [],
        execute: function () {
            _export('default', UserModel);
        }
    };
});
System.register('app/app.js', ['app/user.model.js'], function (_export) {
  'use strict';

  var UserModel, App;
  return {
    setters: [function (_appUserModelJs) {
      UserModel = _appUserModelJs['default'];
    }],
    execute: function () {
      App = (function () {
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
        }
      })();

      _export('default', App);
    }
  };
});
System.register('main.js', ['app/app.js'], function (_export) {
  'use strict';

  var App;
  return {
    setters: [function (_appAppJs) {
      App = _appAppJs['default'];
    }],
    execute: function () {

      console.log($.fn.jquery);
      console.info('Main Entered');
      console.info(App);

      App.init();

      $(document).ready(function () {
        console.info('Document Ready Fool!');

        App.init();
      });
    }
  };
});
//# sourceMappingURL=build.js.map