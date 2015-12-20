'use strict';
/* global browser, jasmine */

// #############################################################################
// CONFIGURATION
var SpecReporter = require('jasmine-spec-reporter');

var config = {
    // Maximum number of total browser sessions to run. Tests are queued in
    // sequence if number of browser sessions is limited by this parameter.
    // Use a number less than 1 to denote unlimited. Default is unlimited
    maxSessions: 1,

    // The location of all specs that should be launched
    specs: ['integration/specs/*.js'],

    // To launch specific suite run: protractor conf.js --suite admin
    suites: {
        all: ['integration/specs/lead.crud.spec.js']
    },

    // Capabilities to be passed to the webdriver instance
    capabilities: {
        'browserName': 'chrome'
    },

    // Params for setting browser window width and height - can be also
    // changed via the command line as: --params.browserConfig.width 1024
    params: {
        browserConfig: {
            width: 1280,
            height: 1024
        }
    },

    onPrepare: function () {
        // Add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: true
        }));
        // Set Angular site flag to disable Angular-specific features
        browser.ignoreSynchronization = true;
        // Set window size
        browser.driver.manage().window().setSize(
            browser.params.browserConfig.width,
            browser.params.browserConfig.height
        );
    },

    // Name of the process executing this capability.  Not used directly by
    // protractor or the browser, but instead pass directly to third parties
    // like SauceLabs as the name of the job running this test
    name: 'example integration tests',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        // If true, include stack traces in failures
        includeStackTrace: true,
        defaultTimeoutInterval: 3000000,
        print: function () {}
    }

};

exports.config = config;
