'use strict';

(function(define) {

  define(function() {

    // dependencies
    WebAppContactDetailController.$inject = ['$state', '$stateParams', 'contact'];

    return WebAppContactDetailController;

    function WebAppContactDetailController($state, $stateParams, contact) {

      var vm = this;

      // assign values
      vm.contact = contact;

      // assign methods
      // vm.method = method;

      // define methods
      // function method() {
      // return '';
      // }
    }
  });
})(window.define);
