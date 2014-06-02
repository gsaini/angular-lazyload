define([
    'angular',
    './module'
], function(angular, lazyModule) {
    'use strict';

    /**
     * [homeService description]
     * @param  {[type]} $http [description]
     * @return {[type]}       [description]
     */
    lazyModule.service('HomeService', ['$http',
        function($http) {
            var self = this;

            /**
             * [getData description]
             * @return {[type]} [description]
             */
            self.getData = function() {
                return $http.get('data/home.json');
            };
        }
    ]);

});