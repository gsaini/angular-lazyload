({
    dir: "build",
    mainConfigFile: 'public/modules/config.js',
    //A function that will be called for every write to an optimized bundle
    //of modules. This allows transforms of the content before serialization.
    // Overwrite the moduleName on optimized js to excute the module on load the js.
    onBuildWrite: function(moduleName, path, contents) {
        return contents.replace(/define\(\'\w+\/module\'\,/g, 'define(');
    }
})