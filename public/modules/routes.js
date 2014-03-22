define([
    'angular'
], function(angular) {
    'use strict';
    angular.module('angularProjectApp', [
        'ngRoute',
        'oc.lazyLoad'
    ]).config(function($routeProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            asyncLoader: require
        });

        $routeProvider
            .when('/home', {
                templateUrl: 'modules/home/home.html',
                controller: 'HomeController',
                resolve: {
                    load: ['$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'home',
                                files: ['modules/home/module.js']
                            });
                        }
                    ]
                }
            })
            .when('/about', {
                templateUrl: 'modules/about/about.html',
                controller: 'AboutController',
                resolve: {
                    load: ['$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'about',
                                files: ['modules/about/module.js']
                            });
                        }
                    ]
                }
            })
            .when('/contact', {
                templateUrl: 'modules/contact/contact.html',
                controller: 'ContactController',
                resolve: {
                    load: ['$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'contact',
                                files: ['modules/contact/module.js']
                            });
                        }
                    ]
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
});