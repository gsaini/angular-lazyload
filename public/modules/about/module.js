define([
    'angular',
    'aboutController',
    'aboutService'
], function(angular, aboutController, service) {
    'use strict';

    var aboutModule = angular.module('about', [])
        .controller('AboutController', aboutController)
        .service('AboutService', service.aboutService)
        .service('OtherService', service.otherService);

    return aboutModule;
});