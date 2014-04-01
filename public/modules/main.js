require.config({
    shim: {
        angular: {
            exports: "angular"
        },
        ocLazyLoad: ['angular'],
        bootstrap: ['angular'],
        'angular-ui-route': ['angular']
    },
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route',
        'angular-ui-route': '../bower_components/angular-ui-router/release/angular-ui-router',
        ocLazyLoad: '../bower_components/ocLazyLoad/ocLazyLoad',
        bootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',

        homeController: 'home/controller',
        homeService: 'home/service',

        aboutController: 'about/controller',
        aboutService: 'about/service',

        contactController: 'contact/controller',
        contactService: 'contact/service',

        routeManager: 'route-manager',

        bootstrapService: 'common/services/bootstrap'
    },
    deps: ['angular', 'app'],
    callback: function(angular, app) {
        angular.bootstrap(document.getElementById('app'), ['appModule']);
    }
});