'use strict';


(function(window, define) {
  define(['angular', './utils.factory.js'], function(angular, exUtilsFactory) {
    var ExUtilsModule = 'Ex.Utils';

    angular.module(ExUtilsModule, [])
      .factory('exUtils', exUtilsFactory);

    return ExUtilsModule;
  });

})(window, window.define);
