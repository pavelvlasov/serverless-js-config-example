'use strict';

const merge = require('lodash/merge');
const baseConfig = require('./base-serverless');

module.exports = merge({}, baseConfig, {
    service: 'sls-js-base-config',

    functions: {
        hello: {
            handler: 'index.hello',
            events: [
                {
                    http: {
                        path: 'hello',
                        method: 'get'
                    }
                }
            ]
        }
    }
});
