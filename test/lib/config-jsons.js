
// jscs:disable
module.exports = {
    valid: [
        {
            logLevel: 'info'
        },
        {
            version: '1.0.0',
            logLevel: 'debug'
        }
    ],
    //---------------------------------------------------------------------------------------------
    invalid: [
        {
            version: '2.1.0',
            log_level: 'info', // debug, verbose, info
            app: {
                port: 80
            }
        },
        {
            version: '1.0.0'
        }
    ]
};