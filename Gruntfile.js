module.exports = function(grunt) {

    var globalConfig = {
        // Assets destinaion paths
        dev: 'dist', // Path to dev output (`grunt`)
        build: 'gh-pages' // Path to build output (`grunt deploy`) this path is the branch for github.io
    };

    var path = require('path');


    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config/'),
        jitGrunt: {
            customTasksDir: 'grunt/tasks/',
            staticMappings: {}
        },
        config: {
            globalConfig: globalConfig
        }
        
    });

};
