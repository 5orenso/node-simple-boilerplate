/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2014 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';
var _        = require('underscore'),
    logger;

function MyApp(opt) {
    var opts = opt || {};
    if (_.isObject(opts.logger)) {
        logger = opts.logger;
    }
}

MyApp.prototype.run = function run() {
    // Start my application and do all your stuff.
    logger.log('info', 'info: Done :)');
    logger.log('verbose', 'verbose: Done :)');
    logger.log('debug', 'debug: Done :)');
    this.say('Yo!');
};

MyApp.prototype.say = function say(text) {
    logger.log('info', text);
};

module.exports = MyApp;
