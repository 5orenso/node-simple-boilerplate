# node-boilerplate

[![Build Status](https://travis-ci.org/5orenso/node-boilerplate.svg)](https://travis-ci.org/5orenso/node-boilerplate)
[![Coverage Status](https://coveralls.io/repos/5orenso/node-boilerplate/badge.svg)](https://coveralls.io/r/5orenso/node-boilerplate)

A small boilerplate to help you kickstart your Node.js module projects with unit tests, integration tests, 
code coverage, continous integration, code hinting and code style enforcement.

I've also made everything ready for you so it's easy to publish your new module to the 
[npmjs.com server](https://npmjs.com).


## Helper modules in use:

__JSHint__
A tool that helps to detect errors and potential problems in your JavaScript code.

__Grunt__
The Javascript task runner. In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes.

__Buster.js__
A browser JavaScript testing toolkit. It does browser testing with browser automation (think JsTestDriver), QUnit style static HTML page testing, testing in headless browsers (PhantomJS, jsdom), and more.

__JSCS__
JSCS is a code style linter for programmatically enforcing your style guide.

__Istanbul__
A Javascript code coverage tool written in JS.

__Travis__
Travis CI is a hosted continuous integration service. It is integrated with GitHub and offers first class support for many languages.

__Coveralls.io__
Coveralls is a web service to help you track your code coverage over time, and ensure that all your new code is fully covered.


## Howto report issues

Use the [Issue tracker](https://github.com/5orenso/node-boilerplate/issues)


### Howto upgrade modules
```bash
$ npm install -g npm-check-updates
$ ncu -u
$ npm install --save --no-optional
```


### HOWTO upgrade dev environment
```bash
npm install buster --save-dev
npm install buster-istanbul --save-dev
npm install grunt --save-dev
npm install grunt-buster --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-nodeunit --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-coveralls --save-dev
npm install grunt-jscs --save-dev
npm install grunt-nodemon --save-dev
npm install grunt-shell --save-dev
```


## More about the author

- Twitter: [@sorenso](https://twitter.com/sorenso)
- Instagram: [@sorenso](https://instagram.com/sorenso)
- Facebook: [@sorenso](https://facebook.com/sorenso)
