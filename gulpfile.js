'use strict';

// #############################################################################
// IMPORTS
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

// #############################################################################
// SETTINGS
var PROJECT_ROOT = __dirname;
var PROJECT_PATH = {
    'js': PROJECT_ROOT + '/static/js',
    'tests': PROJECT_ROOT + '/tests'
};

var PROJECT_PATTERNS = {
    'lint': [
        PROJECT_PATH.js + '/addons/*.js',
        PROJECT_PATH.tests + '/**/*.js',
        '!' + PROJECT_PATH.tests + '/coverage/**/*.js',
        PROJECT_ROOT + '/gulpfile.js'
    ]
};

// #############################################################################
// LINTING
gulp.task('lint', function () {
    return gulp.src(PROJECT_PATTERNS.lint)
        .pipe(jshint())
        .pipe(jscs())
        .on('error', function (error) {
            gutil.log('\n' + error.message);
            if (process.env.CI) {
                // force the process to exit with error code
                process.exit(1);
            }
        })
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('tests:lint', ['lint']);
