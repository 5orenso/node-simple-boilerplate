/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2016 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';

/**
 * Module for my app
 * @constructor
 * @param {hash} opt - Constructor options.
 * @property {string} [config={}] The config files.
 */
function MyApp(opt) {
    let opts = opt || {};
    if (opts.debug) {
        console.log(opts);
    }
}

/**
 * Run function
 * @returns {string} word - Result for this function.
 */
MyApp.prototype.run = () => {
    // Start my application and do all your stuff.
    return MyApp.prototype.say('Yo!');
};

/**
 * Say function
 * @param {string} text - Text to say.
 * @returns {string} text - Just saying.
 */
MyApp.prototype.say = (text) => {
    return text;
};

module.exports = MyApp;
