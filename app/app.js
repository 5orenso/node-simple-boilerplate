/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2014 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';

var path = require('path'),
    commander = require('commander'),
    appPath = path.normalize(__dirname + '/../'),
    ConfigValidator = require(appPath + 'lib/config-validator'),
    configValidator = new ConfigValidator();

commander
    .option('-c, --config <file>', 'configuration file path', './config/config-dist.js')
    .option('-s, --server <server ip>', 'ip of server', '127.0.0.1')
    .parse(process.argv);
var config = require(appPath + commander.config);
if (!configValidator.isValid(config)) {
    console.error(configValidator.error());
    process.exit(1);
}

var Logger = require(appPath + 'lib/logger');
var logger = new Logger({
    logLevel: config.logLevel
});

var App = require(appPath + 'lib/my-app.js');
var app = new App({
    logger: logger
});

app.run();
