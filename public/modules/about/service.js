define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [aboutService description]
     * @param  {[type]} $http [description]
     * @return {[type]}       [description]
     */
    var aboutService = function($http) {
        return {
            /**
             * [getAwesomeThings description]
             * @return {[type]} [description]
             */
            getAwesomeThings: function() {
                return $http.get('data/about.json');
            }
        };
    };

    /**
     * [otherService description]
     * @param  {[type]} $http [description]
     * @return {[type]}       [description]
     */
    var otherService = function($http) {
        return {
            /**
             * [getStatus description]
             * @return {[type]} [description]
             */
            getStatus: function() {
                return 'active';
            }
        };
    };

    return {
        aboutService: ['$http', aboutService],
        otherService: ['$http', otherService]
    };
});