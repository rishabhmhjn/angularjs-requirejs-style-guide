'use strict';

(function(window, define) {
  define([
    'angular',
    './config/config.module',
    './filters/filters.module',
    './directives/directives.module',
    './utils/utils.module'
  ], function(angular, ExCommonConfigModule, ExCommonFiltersModule, ExCommonDirectivesModule, ExUtilsModule) {

    var ExCommonModule = 'Ex.Common';

    angular.module(ExCommonModule, [
      ExCommonConfigModule, ExCommonFiltersModule,
      ExCommonDirectivesModule, ExUtilsModule
    ]);

    return ExCommonModule;
  });

})(window, window.define);
