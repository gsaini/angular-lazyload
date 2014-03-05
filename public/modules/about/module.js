define([
	'angular', 
	'aboutController', 
	'aboutService'
	], function(angular, aboutController, aboutService){
	'use strict';

	var aboutModule = angular.module('about', [])
		.controller('AboutCtrl', aboutController)
		.service('AboutService', aboutService);

	return aboutModule;
});
