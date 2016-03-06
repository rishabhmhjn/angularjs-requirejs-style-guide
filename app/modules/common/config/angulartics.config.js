'use strict';

(function(window, define) {
  define(['angulartics'], function() {
    AngularticsConfig.$inject = ['$analyticsProvider', '$logProvider'];

    return AngularticsConfig;

    function AngularticsConfig($analyticsProvider, $logProvider) {

      $analyticsProvider.registerPageTrack(function(path) {
        window.console.debug('Page tracking ::', path);
      });

      /**
       * Track Event
       * @name eventTrack
       */
      $analyticsProvider.registerEventTrack(function(action, properties) {
        window.console.debug('Event tracking ::', action, properties);
      });

    }

  });
})(window, window.define);
