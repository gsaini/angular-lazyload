module.exports = function(grunt) {
    'use strict';

    // Displays the execution time of [grunt](http://gruntjs.com) tasks
    require('time-grunt')(grunt);

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    dir: "build",
                    mainConfigFile: 'public/modules/config.js',
                    //A function that will be called for every write to an optimized bundle
                    //of modules. This allows transforms of the content before serialization.
                    // Overwrite the moduleName on optimized js to excute the module on load the js.
                    onBuildWrite: function(moduleName, path, contents) {
                        return contents.replace(/define\(\'\w\/\w+\/module\'\,/g, 'define(');
                    }
                }
            }
        },
        bower: {
            target: {
                rjsConfig: 'public/modules/config.js',
                options: {
                    baseUrl: 'public/'
                }
            }
        }
    });
    grunt.registerTask('build', ['bower', 'requirejs']);
};