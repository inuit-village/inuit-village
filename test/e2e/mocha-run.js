/**
 * Created by rerades on 25/8/16.
 */
'use strict';

var sassTrue = require('sass-true');
var glob = require('glob');

// Run tests
glob.sync('test/e2e/scss/_*.scss').forEach(function (file) {
    sassTrue.runSass({ file: file }, describe, it);
});