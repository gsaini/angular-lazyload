define(['angular', 'angularRoute'], function(angular, angularRoute){
  'use strict';

  var app = angular.module('angularProjectApp', [
    'ngRoute'
  ])
  .controller('AppCtrl', function () {
      
  })
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }).controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('HomeCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'modules/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'modules/about/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'modules/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
  return app;
});

