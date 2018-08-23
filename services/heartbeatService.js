'use strict'

const moment = require('moment');
const redis = require('redis');

function Heartbeat(expire){
    this.expire = expire;
    
}