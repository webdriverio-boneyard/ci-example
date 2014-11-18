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
    port: 4445,

    desiredCapabilities: {
        browserName: (process.env._BROWSER || '').replace(/_/g, ' '),
        platform: (process.env._PLATFORM || '').replace(/_/g, ' '),
        version: process.env._VERSION,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'idle-timeout': 900,
        tags: ['webdriverio', 'ci-example', process.env._BROWSER, process.env._PLATFORM, process.env._VERSION],
        name: 'ci example - ' + process.env._BROWSER,
        build: process.env.TRAVIS_BUILD_NUMBER,
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
    }

});