'use strict';

(function(window, define) {
  define(['angular', './angulartics.config.js', './enable-html5.config'],
    function(angular, angularticsConfig, enableHTML5Config) {

      var ExCommonConfigModule = 'Ex.Common.Config';

      angular.module(ExCommonConfigModule, [
          'angulartics'
        ])
        .config(enableHTML5Config)
        .config(angularticsConfig);

      return ExCommonConfigModule;
    });

})(window, window.define);
