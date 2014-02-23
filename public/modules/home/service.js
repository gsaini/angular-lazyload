define(['angular'], function(angular){
'use strict';

	var app = angular.module('home', [])
	  .service('HomeService', function () {
	    return {
	    	get:function(){
	    		return [
			      'HTML5 Boilerplate',
			      'AngularJS',
			      'Karma',
			      'RequireJS'
			    ];
	    	}
	    }
	  });

	return app;
});
