define(['angular'], function(angular){
	'use strict';

	var aboutService = function ($http) {
	    return {
	    	getAwesomeThings:function(){
	    		return $http.get('data/awesomeThings.json');
	    	}
	    }
	};
	return ['$http', aboutService];
});
