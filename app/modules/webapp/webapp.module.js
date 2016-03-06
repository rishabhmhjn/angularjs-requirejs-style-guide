'use strict';

(function(window, define) {
  define([
    'angular',
    './webapp.states.js',
    './common/common.module.js'
  ], function(angular, ExWebAppStatesModule, ExWebAppCommonModule) {

    var ExWebAppModule = 'Ex.WebApp';
    angular.module(ExWebAppModule, [ExWebAppStatesModule, ExWebAppCommonModule]);

    return ExWebAppModule;
  });

})(window, window.define);
