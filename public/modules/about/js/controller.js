define(['angular'], function(angular){
	'use strict';

	var aboutController = function ($scope, aboutService) {
	    aboutService.getAwesomeThings().success(function(response){
	    	if(response.success) $scope.awesomeThings = response.data.awesomeThings;
	    });
	};
	return [ "$scope", 'AboutService', aboutController];
});
