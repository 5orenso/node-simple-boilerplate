/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2014 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';

var path = require('path'),
    commander = require('commander'),
    app_path = path.normalize(__dirname + '/../');

commander
    .option('-c, --config <file>', 'configuration file path', './config/config.js')
    .parse(process.argv);
var config = require(app_path + commander.config);

var logger = require(app_path + 'lib/logger')({
    log_level : config.log_level
});

var app = require(app_path + 'lib/my-app.js')({
    logger: logger
});

app.run();
