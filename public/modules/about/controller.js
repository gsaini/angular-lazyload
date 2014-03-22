define(['angular'], function(angular) {
    'use strict';

    /**
     * [aboutController description]
     * @param  {[type]} $scope       [description]
     * @param  {[type]} aboutService [description]
     * @return {[type]}              [description]
     */
    var aboutController = function($scope, aboutService) {
        var self = this;

        /**
         * [pageLoad description]
         * @return {[type]} [description]
         */
        self.pageLoad = function() {
            aboutService.getAwesomeThings().success(function(response) {
                if (response.success) $scope.awesomeThings = response.data;
            });
        };

        self.pageLoad();
    };

    return ["$scope", 'AboutService', aboutController];
});