define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [contactService description]
     * @param  {[type]} $http [description]
     * @return {[type]}       [description]
     */
    var contactService = function($http) {
        return {
            /**
             * [getContacts description]
             * @return {[type]} [description]
             */
            getContacts: function() {
                return $http.get('data/contacts.json');
            }
        };
    };

    return ['$http', contactService];
});