module.exports = {
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
};
