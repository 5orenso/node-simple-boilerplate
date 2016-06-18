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
    appPath = path.normalize(__dirname + '/../../');

buster.testCase('lib/my-app', {
    setUp: function () {
    },
    tearDown: function () {
        delete require.cache[require.resolve(appPath + 'lib/my-app')];
    },
    'Test module:': {
        'dummy sync test': function () {
            assert(true);
        },

        'dummy async test': function (done) {
            // Do some async stuff and call done.
            assert(true);
            done();
        },

        'dummy async w/promises test': function (done) {
            function promiseTest(input) {
                return new Promise(function (resolve, reject) {
                    if (input) {
                        resolve(input);
                    } else {
                        reject(new Error(input));
                    }
                });
            }
            promiseTest(true)
                .then(function () {
                    assert(true);
                    done();
                })
                .catch(function (error) {
                    console.log(error);
                    assert(false);
                });
        },

        'exposed run function w/options': function () {
            var MyApp = require(appPath + 'lib/my-app');
            var myApp = new MyApp();
            var result = myApp.run();
            assert.equals(result, 'Yo!');
        }

    }
});
