'use strict';

(function(window, define) {

  define([
    'angular'
  ], function(angular) {

    // dependencies
    WebAppHomeIndexController.$inject = ['$state', '$stateParams', 'contacts'];

    return WebAppHomeIndexController;

    function WebAppHomeIndexController($state, $stateParams, contacts) {

      var vm = this;

      // assign values
      vm.contacts = contacts;

      // assign methods
      // vm.method = method;

      // define methods
      // function method() {
      // return '';
      // }
    }
  });
})(window, window.define);
