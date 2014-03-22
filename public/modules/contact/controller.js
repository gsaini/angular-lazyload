define(['angular'], function(angular) {
    'use strict';

    /**
     * [contactController description]
     * @param  {[type]} $scope [description]
     * @return {[type]}        [description]
     */
    var contactController = function($scope, contactService) {
        var self = this;

        /**
         * [pageLoad description]
         * @return {[type]} [description]
         */
        self.pageLoad = function() {
            contactService.getContacts().success(function(response) {
                $scope.contacts = response.data;
            });
        };

        self.pageLoad();
    };

    return ['$scope', 'ContactService', contactController];
});