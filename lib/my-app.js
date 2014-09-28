/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2014 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';
var when     = require('when'),
    winston  = require('winston'),
    _        = require('underscore'),
    app_path = __dirname + '/../';

var MyApp = function (opt, mock_services) {
    var opts = opt || {};
    mock_services = mock_services || {};
    var logger;
    if (mock_services.logger) {
        logger = mock_services.logger;
    } else if (!logger) {
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
