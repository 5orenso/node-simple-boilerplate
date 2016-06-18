/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2016 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';

var buster = require('buster'),
    assert = buster.assert,
    path = require('path'),
    appPath = path.normalize(__dirname + '/../');

buster.testCase('lib/my-app', {
    setUp: function () {
    },
    tearDown: function () {
        delete require.cache[require.resolve(appPath + 'lib/my-app')];
    },
    'Test module:': {
        'exposed run function w/options': function () {
            var app = require(appPath + 'app/app');
            var result = app.run();
            assert.equals(result, 'Yo!');
        }

    }
});
