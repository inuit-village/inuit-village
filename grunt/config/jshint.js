"use strict";

module.exports = function (grunt, opt) {
    return {
            options: {
                reporter: require('jshint-stylish')
            },
            target: ['src/assets/js/**/*.js']
    };
};