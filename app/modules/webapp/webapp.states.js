'use strict';

(function(window, define) {
  define([
    'angular',
    './home/webapp.home.controller',
    './home/index/webapp.home.index.controller',
    './home/contacts/detail/contact.detail.controller',
    './home/about/webapp.home.about.controller',
    'uiRouter'
  ], function(angular,
    WebAppHomeController,
    WebAppHomeIndexController,
    WebAppContactDetailController,
    WebAppHomeAboutController
  ) {

    var ExWebAppStatesModule = 'Ex.WebApp.States';

    angular.module(ExWebAppStatesModule, ['ui.router'])
      .config(WebAppStateConfig)
      .controller('WebAppHomeController', WebAppHomeController)
      .controller('WebAppHomeIndexController', WebAppHomeIndexController)
      .controller('WebAppContactDetailController', WebAppContactDetailController)
      .controller('WebAppHomeAboutController', WebAppHomeAboutController);

    WebAppStateConfig.$inject = ['$stateProvider'];


    // resolvers
    ContactsResolver.$inject = ['ContactsService'];
    ContactDetailResolver.$inject = ['ContactsService', '$stateParams'];

    return ExWebAppStatesModule;

    function WebAppStateConfig($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          controller: 'WebAppHomeController',
          controllerAs: 'homeCtrl',
          templateUrl: '/modules/webapp/home/webapp.home.tpl.html',
          ncyBreadcrumb: {
            label: 'Home'
          },
          abstract: true
        })
        .state('home.index', {
          url: '',
          controller: 'WebAppHomeIndexController',
          controllerAs: 'homeIndexCtrl',
          templateUrl: '/modules/webapp/home/index/webapp.home.index.tpl.html',
          ncyBreadcrumb: {
            label: 'Contacts'
          },
          resolve: {
            contacts: ContactsResolver
          }
        })
        .state('home.contactDetail', {
          url: '{contactId:[0-9]{1,4}}',
          controller: 'WebAppContactDetailController',
          controllerAs: 'contactDetailCtrl',
          templateUrl: '/modules/webapp/home/contacts/detail/contact.detail.tpl.html',
          ncyBreadcrumb: {
            label: '{{ contactDetailCtrl.contact.name }}'
          },
          resolve: {
            contact: ContactDetailResolver
          }
        })
        .state('home.about', {
          url: 'about',
          controller: 'WebAppHomeAboutController',
          controllerAs: 'homeAboutCtrl',
          templateUrl: '/modules/webapp/home/about/webapp.home.about.tpl.html',
          ncyBreadcrumb: {
            label: 'About'
          },
          resolve: {
            about: function() {
              return {
                name: 'Rishab',
                mail: 'rishabh@statusbrew.com'
              };
            }
          }
        });
    }

    function ContactsResolver(ContactsService) {
      return ContactsService.all();
    }

    function ContactDetailResolver(ContactsService, $stateParams) {
      return ContactsService.get($stateParams.contactId);
    }
  });

})(window, window.define);
