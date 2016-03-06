'use strict';

(function(window, require) {
  define([
    'angular',
    './modules/common/common.module',
    './modules/webapp/webapp.module',
    'uiRouter',
    'angulartics',
    'ncy-angular-breadcrumb'
  ], function(angular, ExCommonModule, ExWebAppModule) {

    var ExAppModule = 'Ex.App';
    angular
      .module(ExAppModule, [
        ExCommonModule, ExWebAppModule,
        'ncy-angular-breadcrumb', 'angulartics'
      ])
      .config(ExAppConfig)
      .run(ExAppRun);

    ExAppConfig.$inject = ['$urlRouterProvider', '$breadcrumbProvider'];
    ExAppRun.$inject = ['$rootScope', '$state', '$stateParams'];

    function ExAppConfig($urlRouterProvider, $breadcrumbProvider) {
      $urlRouterProvider.otherwise('/');

      $breadcrumbProvider.setOptions({
        includeAbstract: true
      });
    }

    function ExAppRun($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }

    angular.bootstrap(document, [ExAppModule]);
  });
})(window, window.require);
