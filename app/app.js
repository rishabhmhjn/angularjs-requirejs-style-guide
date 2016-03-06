'use strict';

(function(window, require) {
  require.config({
    // jscs:disable maximumLineLength
    paths: {
      'angular': '../bower_components/angular/angular',
      'uiRouter': '../bower_components/angular-ui-router/release/angular-ui-router',
      'angulartics': '../bower_components/angulartics/src/angulartics',
      'ncy-angular-breadcrumb': '../bower_components/angular-breadcrumb/release/angular-breadcrumb'
    },
    // jscs:enable maximumLineLength
    shim: {
      angular: {
        exports: 'angular'
      },
      'uiRouter': ['angular'],
      'ncy-angular-breadcrumb': ['angular'],
      'angulartics': ['angular']
    },
    deps: ['webapp']
  });
})(window, window.require);
