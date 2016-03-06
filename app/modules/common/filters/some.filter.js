'use strict';

(function(window, define) {

  define([
    'angular'
  ], function(angular) {

    // SomeFilter.$inject = ['$sce'];

    return SomeFilter;

    function SomeFilter( /*$sce*/ ) {
      return function(text, target, attributes) {
        if (!text) {
          return text;
        }

        // $sce.trustAsHtml(text);
        return text;
      };
    }
  });

})(window, window.define);
