var config = module.exports;

config['My tests'] = {
    environment: 'node',
    rootPath: '../',
    tests: [
        'test/**/*-test.js'
    ],
    'buster-istanbul': {
        outputDirectory: 'coverage',
        format: 'lcov'
    },
    sources: [
        'lib/**/**/*.js',
        'app/**/*.js'
    ],
    extensions: [
        require('buster-istanbul')
    ]
};
