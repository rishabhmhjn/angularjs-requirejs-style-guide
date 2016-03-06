'use strict';

(function(window, define) {
  define(['angular', '../utils/utils.module.js', './infinite-scroll.directive.js'],
    function(angular, ExUtilsModule, InfiniteScrollDirective) {

      var ExCommonDirectivesModule = 'Ex.Common.Directives';

      angular.module(ExCommonDirectivesModule, [ExUtilsModule])
        .directive('infiniteScroll', InfiniteScrollDirective);

      return ExCommonDirectivesModule;
    });

})(window, window.define);
