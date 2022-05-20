'use strict';

module.exports = {
    server: {
        port: process.env.PORT || 3000
    },
    database: {
        host: process.env.connection || 'mongodb://localhost:27017/',
    },
    auth: {
        secret: 'c1c2c3c4c5'
    }
}