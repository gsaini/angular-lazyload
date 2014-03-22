define([
    'angular',
    'aboutController',
    'aboutService'
], function(angular, aboutController, aboutService) {
    'use strict';

    var aboutModule = angular.module('about', [])
        .controller('AboutController', aboutController)
        .service('AboutService', aboutService);

    return aboutModule;
});