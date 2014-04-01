define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [lazyLoadService description]
     * @param  {[type]} $ocLazyLoadProvider [description]
     * @return {[type]}                     [description]
     */
    var lazyLoadService = function($ocLazyLoad) {
        var self = this;
        self.load = function(moduleName, dependantFiles) {
            return $ocLazyLoad.load({
                name: moduleName,
                files: dependantFiles
            });
        };
    };

    return ['$ocLazyLoad', lazyLoadService];
});