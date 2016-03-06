'use strict';

(function(window, define) {
  define(['angular', './some.filter.js'], function(angular, someFilter) {

    var ExCommonFiltersModule = 'Ex.Common.Filters';

    angular.module(ExCommonFiltersModule, [])
      .config(someFilter);

    return ExCommonFiltersModule;
  });

})(window, window.define);
