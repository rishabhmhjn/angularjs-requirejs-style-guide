'use strict';


(function(window, angular) {

  define([
    'angular'
  ], function(angular) {

    Utils.$inject = ['$timeout', '$q'];

    return Utils;

    function Utils($timeout, $q) {
      return {
        debounce: debounce,
        throttle: throttle,
        findById: findById,
        newRandomKey: newRandomKey
      };

      // The service is actually this function, which we call with the func
      // that should be debounced and how long to wait in between calls
      function debounce(func, wait, immediate) {
        var timeout;
        // Create a deferred object that will be resolved when we need to
        // actually call the func
        var deferred = $q.defer();
        return function() {
          var context = this,
            args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) {
              deferred.resolve(func.apply(context, args));
              deferred = $q.defer();
            }
          };
          var callNow = immediate && !timeout;
          if (timeout) {
            $timeout.cancel(timeout);
          }
          timeout = $timeout(later, wait);
          if (callNow) {
            deferred.resolve(func.apply(context, args));
            deferred = $q.defer();
          }
          return deferred.promise;
        };
      }

      function throttle(func, wait) {
        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return debounce(func, wait);
      }

      // Util for finding an object by its 'id' property among an array
      function findById(a, id) {
        for (var i = 0; i < a.length; i++) {
          if (a[i].id == id) return a[i];
        }
        return null;
      }

      // Util for returning a random key from a collection that also isn't the current key
      function newRandomKey(coll, key, currentKey) {
        var randKey;
        do {
          randKey = coll[Math.floor(coll.length * Math.random())][key];
        } while (randKey == currentKey);
        return randKey;
      }
    }
  });
})(window, window.angular);
