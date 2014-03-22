define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [homeService description]
     * @param  {[type]} $http [description]
     * @return {[type]}       [description]
     */
    var homeService = function($http) {
        return {
            /**
             * [getData description]
             * @return {[type]} [description]
             */
            getData: function() {
                return $http.get('data/home.json');
            }
        };
    };

    return ['$http', homeService];
});