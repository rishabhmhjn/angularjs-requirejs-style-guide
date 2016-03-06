'use strict';

(function(define) {
  define(function() {
    ContactsService.$inject = ['$http', 'exUtils'];
    return ContactsService;

    function ContactsService($http, exUtils) {
      var path = 'assets/contacts.json';
      var contacts = $http.get(path)
        .then(function(resp) {
          return resp.data.contacts;
        });

      var factory = {};

      factory.all = function() {
        return contacts;
      };

      factory.get = function(id) {
        return contacts
          .then(function(contacts) {
            return exUtils.findById(contacts, id);
          });
      };

      return factory;
    }
  });

})(window.define);
