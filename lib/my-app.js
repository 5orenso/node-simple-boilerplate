/*
 * https://github.com/5orenso
 *
 * Copyright (c) 2016 Øistein Sørensen
 * Licensed under the MIT license.
 */
'use strict';

function MyApp(opt) {
    var opts = opt || {};
    if (opts.debug) {
        console.log(opts);
    }
}

MyApp.prototype.run = function run() {
    // Start my application and do all your stuff.
    return this.say('Yo!');
};

MyApp.prototype.say = function say(text) {
    return text;
};

module.exports = MyApp;
