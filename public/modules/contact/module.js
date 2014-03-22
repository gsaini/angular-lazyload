define([
    'angular',
    'contactController',
    'contactService'
], function(angular, contactController, contactService) {
    'use strict';

    var contactModule = angular.module('contact', [])
        .controller('ContactController', contactController)
        .service('ContactService', contactService);

    return contactModule;
});