'use strict';

module.exports = {
    server: {
        port: process.env.PORT || 3000
    },
    database: {
        host: process.env.connection || 'mongodb://127.0.0.1:27017',
    },
    auth: {
        secret: process.env.secret || 'c1c2c3c4c5'
    }
}