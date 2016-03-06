'use strict';


(function(window, define) {
  define(['angular'], function(angular) {

    InfiniteScrollDirective.$inject = ['exUtils'];
    return InfiniteScrollDirective;

    function InfiniteScrollDirective(exUtils) {
      return {
        restrict: 'A',
        link: function($scope, element, attr) {
          var raw = element[0];
          element.bind('scroll', exUtils.throttle(function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
              $scope.$apply(attr.infiniteScroll);
            }
          }, 200));
        }
      };
    }
  });
})(window, window.define);
