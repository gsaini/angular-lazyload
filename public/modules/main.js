require.config({
    baseUrl: '../modules',
    shim: {
        angular: {
            exports: "angular"
        },
        ocLazyLoad: ['angular'],
        'ui-bootstrap': ['angular'],
        'angular-ui-route': ['angular']
    },
    paths: {
        angular: 'vendors/angular/angular',
        angularRoute: 'vendors/angular-route/angular-route',
        'angular-ui-route': 'vendors/angular-ui-router/release/angular-ui-router',
        ocLazyLoad: 'vendors/ocLazyLoad/ocLazyLoad',
        'ui-bootstrap': 'vendors/angular-bootstrap/ui-bootstrap-tpls.min',
    },
    deps: ['app'],
    callback: function(bootstrap) {
        angular.bootstrap(document.getElementById('app'), ['appModule']);
    }
});