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
            $stateProvider.state('app', {
                url: "",
                abstract: true,
                views: {
                    header: {
                        templateUrl: "modules/common/partials/header.tpl.html"
                    },
                    '': {
                        template: "<div ui-view></div>"
                    }
                }
            }).state('app.home', {
                url: "/home",
                templateUrl: "modules/home/home.tpl.html",
                controller: 'HomeController',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function($ocLazyLoad) {

                            // will create a common function to load the js deps.
                            return $ocLazyLoad.load({
                                name: 'home',
                                files: ['home/module', 'home/controller']
                            });
                        }
                    ]
                }
            }).state('app.home.content', {
                url: "/content",
                views: {
                    'home-content': {
                        templateUrl: "modules/home/content/content.tpl.html",
                        controller: 'ContentController'
                    }
                },
                resolve: {
                    deps: ['$ocLazyLoad',
                        function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'home',
                                files: ['home/content/controller']
                            });
                        }
                    ]
                }
            }).state('app.about', {
                url: "/about",
                templateUrl: "modules/about/about.tpl.html",
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
            }).state('app.contact', {
                url: "/contact",
                templateUrl: "modules/contact/contact.tpl.html",
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

    app.run(['$state',
        function($state) {
            $state.go('app.home');
        }
    ]);

    return app;
});