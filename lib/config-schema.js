module.exports = {
    required: true,
    type: 'object',
    properties: {
        version: {required: false, type: 'string'},
        logLevel: {required: true, type: 'string'}
    },
    additionalProperties: false
};
