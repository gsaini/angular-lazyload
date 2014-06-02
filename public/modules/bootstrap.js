define([
    'angular',
    'app'
], function(angular, app) {
    'use strict';

    return angular.bootstrap(document.getElementById('app'), ['appModule']);
});