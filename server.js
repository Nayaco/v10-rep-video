'use strict'

const server_config = require('./configs/server.config');
const Koa = require('koa'), app = new Koa();
const parser = require('koa-bodyparser');
const logger = require('koa-logger');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment');

const s2s = require('./utils/string2Stream');

const log_file = fs.createWriteStream(path.join(server_config.log_path, moment().format('YYYY-MM-DD'), '.log'), 'a')

app.use(parser());
app.use(logger({
    transporter: (str, args)=>{
        s2s(str, 'r').pipe(log_file);
    }
}));

app.listen(server_config.port, console.log(`Port ${server_config.port} on listening`));