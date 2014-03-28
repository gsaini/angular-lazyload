({
	baseUrl: "public/modules",
	dir: "build",
	removeCombined: true,
	paths: {
        angular: "../bower_components/angular/angular",
        homeController: 'home/controller',
        homeService: 'home/service',
        aboutController: 'about/controller',
        aboutService: 'about/service',
        contactController: 'contact/controller',
        contactService: 'contact/service'
    },
    shim: {
        angular: {
            exports: "angular"
        },
        ocLazyLoad: ['angular'],
        bootstrap: ['angular'],
        angularRoute: ['angular']
    },
	modules: [{
		name: "home/module",
		exclude:['angular']
	},{
		name:"about/module",
		exclude:["angular"]
	},
	{
		name:"contact/module",
		exclude:["angular"]
	}]
})