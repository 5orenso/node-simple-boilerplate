/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2014 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';

var path = require('path'),
    commander = require('commander'),
    appPath = path.normalize(__dirname + '/../');

commander
    .option('-c, --config <file>', 'configuration file path', './config/config-dist.js')
    .option('-s, --server <server ip>', 'ip of server', '127.0.0.1')
    .parse(process.argv);

var ConfigLoader = require(appPath + 'lib/config-loader');
var configLoader = new ConfigLoader();
var config = configLoader.load(appPath + commander.config);

if (config) {
    var Logger = require(appPath + 'lib/logger');
    var logger = new Logger({
        logLevel: config.logLevel
    });

    var App = require(appPath + 'lib/my-app.js');
    var app = new App({
        logger: logger
    });

    app.run();
}
