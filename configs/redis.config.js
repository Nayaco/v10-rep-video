'use strict'

const path = require('path');

const RedisConfig = {
    Redis1: {
        name: 'UploadService',
        host: '127.0.0.1',
        port: 6379,
    },
    Redis2: {
        name: 'HeartBeatService',
        host: '127.0.0.1',
        port: 6379,
    },
}

module.exports = RedisConfig;