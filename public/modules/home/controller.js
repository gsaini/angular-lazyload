define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [homeController description]
     * @param  {[type]} $scope      [description]
     * @param  {[type]} homeService [description]
     * @return {[type]}             [description]
     */
    var homeController = function($scope, homeService) {
        var self = this;

        /**
         * [pageLoad description]
         * @return {[type]} [description]
         */
        self.pageLoad = function() {
            homeService.getData().success(function(response) {
                $scope.awesomeThings = response.data;
            });
        };

        self.pageLoad();
    };

    return ['$scope', 'HomeService', homeController];
});