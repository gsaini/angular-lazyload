define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [config description]
     * @param  {[type]} $stateProvider      [description]
     * @param  {[type]} $ocLazyLoadProvider [description]
     * @return {[type]}                     [description]
     */
    var config = function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            asyncLoader: require
        });

        /**
         * [load description]
         * @param  {[type]} moduleName [description]
         * @param  {[type]} files  [description]
         * @return {[type]}            [description]
         */
        var loadModule = function(moduleName, files) {
            return ['LoadService', function(loadService) {
                return loadService.load(moduleName, files);
            }];
        };

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider.state('home', {
            url: "/home",
            templateUrl: "modules/home/home.html",
            controller: 'HomeController',
            resolve: {
                load: loadModule('home', ['modules/home/module.js'])
            }
        }).state('about', {
            url: "/about",
            templateUrl: "modules/about/about.html",
            controller: 'AboutController',
            resolve: {
                load: loadModule('about', ['modules/about/module.js'])
            }
        }).state('contact', {
            url: "/contact",
            templateUrl: "modules/contact/contact.html",
            controller: 'ContactController',
            resolve: {
                load: loadModule('contact', ['modules/contact/module.js'])
            }
        });
    };

    return ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', config];
});