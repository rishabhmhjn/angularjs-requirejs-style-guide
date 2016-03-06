'use strict';

(function(window, define) {
  define(function() {

    EnableHTML5Config.$inject = ['$locationProvider'];
    return EnableHTML5Config;

    function EnableHTML5Config($locationProvider) {
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
    }

  });
})(window, window.define);
