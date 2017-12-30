'use strict';

module.exports = {
    provider: {
        name: 'aws',
        runtime: 'nodejs6.10',
        stage: '${opt:stage, "dev"}',
        region: '${opt:region, "us-east-1"}',
        memorySize: 128,
        timeout: 10,
        deploymentBucket: {
            name: 'sls-js-config'
        }
    }
};
