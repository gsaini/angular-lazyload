require.config({
    baseUrl: "../bower_components",
    shim: {
        angular: {
            exports: "angular"
        },
        ocLazyLoad: [
            "angular"
        ],
        bootstrap: [
            "angular"
        ],
        angularRoute: [
            "angular"
        ]
    },
    paths: {
        app: '../modules'
        homeController: "home/controller",
        homeService: "home/service",
        aboutController: "about/controller",
        aboutService: "about/service",
        contactController: "contact/controller",
        contactService: "contact/service",
        routeManager: "route-manager",
        bootstrapService: "common/services/bootstrap",
        "sass-bootstrap": "sass-bootstrap/dist/js/bootstrap",
        requirejs: "requirejs/require",
        ocLazyLoad: "ocLazyLoad/ocLazyLoad.min",
        "angular-route": "angular-route/angular-route",
        "angular-bootstrap": "angular-bootstrap/ui-bootstrap-tpls",
        angular: "angular/angular"
    },
    modules: [{
        name: "home/module",
        exclude: [
            "angular"
        ]
    }, {
        name: "about/module",
        exclude: [
            "angular"
        ]
    }, {
        name: "contact/module",
        exclude: [
            "angular"
        ]
    }]
});