'use strict';

(function(window, define) {
  define(['angular', './services/services.module'],
    function(angular, ExWebAppServicesModule) {
      var ExWebAppCommonModule = 'Ex.WebApp.Common';
      angular.module(ExWebAppCommonModule, [ExWebAppServicesModule]);
      return ExWebAppCommonModule;
    });

})(window, window.define);
