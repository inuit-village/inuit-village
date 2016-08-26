/**
 * Created by rerades on 7/4/16.
 */

module.exports = function (grunt) {
    grunt.registerTask('test-nightwatch', [
        'nightwatch:local',
        /*
        'nightwatch:chrome',
        'nightwatch:chromemac',
        'nightwatch:ie11',
        'nightwatch:firefox',
        'nightwatch:internet_explorer_10',
        'nightwatch:android_s4_emulator',
        'nightwatch:default',
        'nightwatch:iphone_6_simulator'
        */
    ]);
};
