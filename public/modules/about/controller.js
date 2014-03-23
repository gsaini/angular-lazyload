define(['angular'], function(angular) {
    'use strict';

    /**
     * [aboutController description]
     * @param  {[type]} $scope       [description]
     * @param  {[type]} aboutService [description]
     * @return {[type]}              [description]
     */
    var aboutController = function($scope, $rootScope, aboutService, otherService) {
        var self = this;

        $rootScope.pageTitle = 'about';

        /**
         * [pageLoad description]
         * @return {[type]} [description]
         */
        self.pageLoad = function() {
            aboutService.getAwesomeThings().success(function(response) {
                if (response.success) $scope.awesomeThings = response.data;
            });
        };

        $scope.status = otherService.getStatus();

        $scope.alerts = [{
            type: 'danger',
            msg: 'Oh snap! Change a few things up and try submitting again.'
        }];

        /**
         * [addAlert description]
         */
        $scope.addAlert = function() {
            $scope.alerts.push({
                msg: "Another alert!"
            });
        };

        /**
         * [closeAlert description]
         * @param  {[type]} index [description]
         * @return {[type]}       [description]
         */
        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        self.pageLoad();
    };

    return ["$scope", '$rootScope', 'AboutService', 'OtherService', aboutController];
});