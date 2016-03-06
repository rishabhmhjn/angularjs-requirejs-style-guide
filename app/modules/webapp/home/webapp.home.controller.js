'use strict';

(function(window, define) {

  define([
    'angular'
  ], function(angular) {

    // dependencies
    WebAppHomeController.$inject = [
      '$state', '$stateParams', '$log'
    ];

    return WebAppHomeController;

    function WebAppHomeController($state, $stateParams, $log) {

      var vm = this;

      // assign constants
      vm.CONST1 = 'CONST1';
      vm.CONST2 = 'CONST2';

      // assign values
      vm.currentState = $state.current.name;

      // assign methods
      vm.getAllStateParams = getAllStateParams;

      // define methods
      function getAllStateParams() {
        return $stateParams;
      }
    }
  });
})(window, window.define);
