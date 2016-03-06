'use strict';

(function(window, define) {
  define(['angular', './contacts.service.js'], function(angular, ContactsService) {

    var ExWebAppServicesModule = 'Ex.WebApp.Common.Services';

    angular.module(ExWebAppServicesModule, [])
      .factory('ContactsService', ContactsService);

    return ExWebAppServicesModule;
  });

})(window, window.define);
