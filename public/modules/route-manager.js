define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [config description]
     * @param  {[type]} $routeProvider      [description]
     * @param  {[type]} $ocLazyLoadProvider [description]
     * @return {[type]}                     [description]
     */
    var config = function($routeProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            asyncLoader: require
        });

        /**
         * [load description]
         * @param  {[type]} moduleName [description]
         * @param  {[type]} ModuleUrl  [description]
         * @return {[type]}            [description]
         */
        var loadModule = function(moduleName, ModuleUrl) {
            return ['LoadService', function(loadService) {
                return loadService.load(moduleName, ModuleUrl);
            }];
        };

        $routeProvider
            .when('/home', {
                templateUrl: 'modules/home/home.html',
                controller: 'HomeController',
                resolve: {
                    load: loadModule('home', 'modules/home/module.js')
                }
            })
            .when('/about', {
                templateUrl: 'modules/about/about.html',
                controller: 'AboutController',
                resolve: {
                    load: loadModule('about', 'modules/about/module.js')
                }
            })
            .when('/contact', {
                templateUrl: 'modules/contact/contact.html',
                controller: 'ContactController',
                resolve: {
                    load: loadModule('contact', 'modules/contact/module.js')
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
    };

    return ['$routeProvider', '$ocLazyLoadProvider', config];
});