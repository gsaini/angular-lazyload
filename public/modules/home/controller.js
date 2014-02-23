define(['angular'], function(angular){
'use strict';

	var app = angular.module('home', [])
	  .controller('HomeCtrl', ['$scope', function ($scope) {
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
	  }]);

	return app;
});
