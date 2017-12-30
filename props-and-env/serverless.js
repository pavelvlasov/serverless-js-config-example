'use strict';

const program = require('commander');

program
    .option('--stage <n>', 'stage')
    .option('--region <n>', 'region')
    .option('--bucket <n>', 'bucket')
    .parse(process.argv);

module.exports = {
    service: 'sls-js-composition-config',

    provider: {
        name: 'aws',
        runtime: 'nodejs6.10',
        stage: program.stage || 'dev',
        region: program.region || 'us-east-1',
        memorySize: 128,
        timeout: 10,
        deploymentBucket: {
            name: program.bucket || 'sls-js-config'
        },
        environment: {
            FOO: process.env.FOO,
            BAR: process.env.BAR
        }
    },

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
};
