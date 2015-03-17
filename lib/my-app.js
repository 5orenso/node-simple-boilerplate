/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2014 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';
var when     = require('when'),
    _        = require('underscore'),
    appPath = __dirname + '/../';

var MyApp = function (opt, mockServices) {
    var opts = opt || {};
    mockServices = mockServices || {};
    var logger = {};
    if (_.isObject(mockServices.logger)) {
        logger = mockServices.logger;
    } else if (_.isObject(opts.logger)) {
        logger = opts.logger;
    }

    return {
        run: function () {
            // Start my application and do all your stuff.
            logger.log('info', 'info: Done :)');
            logger.log('verbose', 'verbose: Done :)');
            logger.log('debug', 'debug: Done :)');
            this.say('Yo!');
        },

        say: function (text) {
            logger.log('info', text);
        }

    };
};

module.exports = MyApp;
