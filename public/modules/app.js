define([
    'angular',
    'angular-ui-route',
    'ocLazyLoad',
    'ui-bootstrap',
    'common/module'
], function(angular, uiRoute, ocLazyLoad, uiBootstrap, common) {
    'use strict';

    var app = angular.module('appModule', [
        'ui.router',
        'oc.lazyLoad',
        'ui.bootstrap',
        'common'
    ]);

    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

            $ocLazyLoadProvider.config({
                asyncLoader: require
            });

            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/home");
            //
            // Now set up the states
            $stateProvider.state('home', {
                url: "/home",
                templateUrl: "modules/home/home.html",
                controller: 'HomeController',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'home',
                                files: ['home/module', 'home/controller']
                            });
                        }
                    ]
                }
            }).state('about', {
                url: "/about",
                templateUrl: "modules/about/about.html",
                controller: 'AboutController',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'about',
                                files: ['about/module', 'about/controller']
                            });
                        }
                    ]
                }
            }).state('contact', {
                url: "/contact",
                templateUrl: "modules/contact/contact.html",
                controller: 'ContactController',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'contact',
                                files: ['contact/module', 'contact/controller']
                            });
                        }
                    ]
                }
            });
        }
    ]);

    return app;
});