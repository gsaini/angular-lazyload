define([
    'angular',
    'homeController',
    'homeService'
], function(angular, homeController, homeService) {
    'use strict';

    var homeModule = angular.module('home', [])
        .controller('HomeController', homeController)
        .service('HomeService', homeService);

    return homeModule;
});