//On génère une config dédié à l'application pour pouvoir utiliser plusieurs APP sur une même page
require.config({
  shim: {
    angular: {
      exports: "angular"
    },
    ocLazyLoad: ['angular'],
    angularRoute:['angular']
  },
  paths: {
    angular:'../bower_components/angular/angular',
    angularRoute:'../bower_components/angular-route/angular-route',
    ocLazyLoad:'../bower_components/ocLazyLoad/ocLazyLoad',
    home:'home/controller',
    about:'about/controller',
    contact:'contact/controller',
    appCtrl:'controller'
  },
  deps:['angular', 'app'],
  callback:function(angular, app){
    angular.bootstrap(document.getElementById('app'),['angularProjectApp']);
  }
});