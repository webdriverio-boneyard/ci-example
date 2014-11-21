var should = require('should'),
    webdriverio = require('webdriverio'),
    webdrivercss = require('webdrivercss');

global.baseUrl = 'http://localhost:8080';
global.browser = webdriverio.remote({

    /**
     * since we are using sauce connect we have access
     * to the sauce cloud via port 4445
     *
     * Note: username and access key also not needed here
     * becuase sauce connect was established with the desired user
     */
    port: process.env.TRAVIS ? 4445 : 4444,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    desiredCapabilities: process.env.TRAVIS ? {
        browserName: (process.env._BROWSER || 'chrome').replace(/_/g, ' '),
        platform: (process.env._PLATFORM || 'Windows 8').replace(/_/g, ' '),
        version: process.env._VERSION || 35,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'local',
        'idle-timeout': 900,
        tags: ['webdriverio', 'ci-example', process.env._BROWSER, process.env._PLATFORM, process.env._VERSION],
        name: 'ci example - ' + (process.env._BROWSER || 'local'),
        build: process.env.TRAVIS_BUILD_NUMBER
    } : {
        browserName: 'chrome'
    }

});

webdrivercss.init(global.browser, {
    screenshotRoot: './test/shots',
    // key: process.env.APPLITOOLS_KEY
});