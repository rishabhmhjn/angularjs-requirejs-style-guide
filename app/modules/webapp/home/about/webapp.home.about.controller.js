'use strict';

(function(window, define) {

  define([
    'angular'
  ], function(angular) {

    // dependencies
    WebAppHomeContactController.$inject = ['$state', '$stateParams', 'about'];

    return WebAppHomeContactController;

    function WebAppHomeContactController($state, $stateParams, about) {

      var vm = this;

      // assign values
      vm.about = about;

      // assign methods
      // vm.method = method;

      // define methods
      // function method() {
      // return '';
      // }
    }
  });
})(window, window.define);
